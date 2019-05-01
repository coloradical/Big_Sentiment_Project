import base64
import json
import requests
import requests.auth

trends = ['John Candy', 'Yash', 'Liverpool']

def getRedditHeaders():
    reddit_id = 'PvAC7W7Qg8_zeg'
    reddit_secret = 'lox-_jgDw5vbweRKRlWd98Vped4'
    reddit_username = 'mchifala'
    reddit_password = 'MwC751992$'
    reddit_user_agent = 'ATLS5412/0.1 by mchifala'

    reddit_auth = requests.auth.HTTPBasicAuth(reddit_id, reddit_secret)
    reddit_post_data = {'grant_type': 'password', 'username': reddit_username, 'password': reddit_password}
    reddit_token_headers = {'User-Agent': reddit_user_agent}
    r_auth = requests.post("https://www.reddit.com/api/v1/access_token", auth= reddit_auth, data=reddit_post_data, headers=reddit_token_headers)
    #print(r.json())

    reddit_token = r_auth.json()['token_type'] + ' ' + r_auth.json()['access_token']

    # Return header dictionary
    return {"Authorization": reddit_token, "User-Agent": reddit_user_agent, 'Content-Type': 'application/json'}

reddit_headers = getRedditHeaders()
elastic_headers = {'Content-Type':'application/json'}
for query in set(trends):
    index = 'test_03_04_19_pubsub'
    r_get = requests.get('https://oauth.reddit.com/r/all/search?q='+query+'&t=day&limit=25', headers = reddit_headers)
    r_get.headers['content-type']
    posts = r_get.json()['data']['children']
    #print("Remaining Calls:", r_get.headers['x-ratelimit-remaining'])
    #print("Time to Reset:", r_get.headers['x-ratelimit-reset'])
    data = []
    fields_to_keep = ['id','title', 'author', 'score', 'subreddit', 'num_comments', 'num_crossposts', 'created_utc']
    for post in posts:
        temp = {k: post['data'][k] for k in fields_to_keep}
        temp.update({'hashtag': query})
        data.append({'index': {"_index": index, '_type': '_doc', '_id': 'r_'+ temp['id'] }})
        del temp['id']
        data.append(temp)
    print(data)

    if data:
        data_to_post = '\n'.join(json.dumps(d) for d in data)
        r_post = requests.post('http://34.73.60.209:9200/'+index+'/_bulk', headers = elastic_headers, data=data_to_post+'\n')
        print(r_post.text)
