#Imports
import requests
import json
import time
from requests_oauthlib import OAuth1
from Crypto.Cipher import XOR
import base64
import sys
import pprint
import publisher
from datetime import datetime

PUBLISH_TO_PUBSUB = True
key = sys.argv[1]

def encrypt(key, plaintext):
  cipher = XOR.new(key)
  return base64.b64encode(cipher.encrypt(plaintext))

def decrypt(key, ciphertext):
  cipher = XOR.new(key)
  return cipher.decrypt(base64.b64decode(ciphertext))

def encodekeys(key,apikeys):
    newkeys=[]
    for i in range(len(apikeys)):
        newkeys.append(encrypt(key,apikeys[i]))
    return newkeys

def decodekeys(key,apikeys):
    newkeys=[]
    for i in range(len(apikeys)):
        newkeys.append(decrypt(key,apikeys[i]).decode("utf-8") )
    return newkeys

def getauth(n):
    try:
        auth
    except NameError:
        #Twitter API Creds
        API_KEY = [b'HVkjFCYvLlM3Fjo5USo/HwAxIikgBQA2IQ==',b'BCEtMxoLMzkDAAYpKhojT0MwUAARDyNWIA==',b'DVwcFw4TLCMPETojKw4gTgMnCgMvKBYgAg==',b'OzpWEQwdNwccACEcKg4EFAANKlA6UDUyCg==',b'HBEyMT9WLBY/MgErUwsWACQjMVIGMxIkWA==',b'HQARIQUCMS0gC0JeLzcfSzk5Mg8lLBUGHA==', b'LAlXC1gqJiACKiQgMC4hMhEwFVsqExY4DA==']
        API_SECRET= [b'LgYrDzgmKhkrMwItHD0rKUAcFAkvKAc1WiEjWjQgMR1NUBEvMzIpDywxRDkiATctARk=',b'AlgUVxsGFTIKNBYQHShETyImUFNQIxIYIwQYIDc6Rz0+LS0DUVE0IDojLBspIiABFzw=',b'Hl8JUBoXF1kPFEISMj8TSxU+EQYjKggoXyE2CwsLFjwcUQglDDADO1k0QQRQAzsINxw=',b'JSAJIC4ENyYHJRoxVRYqIDoOAylZNAYXFyUeJVQ1ATg8AxEOLiAwMRZfQx8SAyccQg4=',b'HQISJysuBSQ7Ch8lPTciIQ4BDyA+LQ5YCg0bIQYDPQ02PAEzAygaNxleMDwRBEQvLAQ=',b'OytUGzAmUAg/DkM4IQMqPABQFiwxMDI4Gh8AWAsLHws5BlFTLBU1NRYfIVsJGiM8PBA=',b'BAEpIV5WElc8LAYSVgEqNyFeNFIeDFIqKS0SDDBfNRMDIAw4LgBXLSwPAFoiHEVPGTg=']
        ACCESS_TOKEN = [b'Q1xWVlhQW1NWXkZeU1lETkFbSBpfPyBZIikSHxQGCjwkPxwlBiQ3FQQKOyU8HDETITI=',b'Q1xWVlhQW1NWXkZeU1lETkFbSAkfAFQpKwMmHTEJMCM6XxAlJ1YWKD0xAjIBHjo2LQQ=',b'Q1xWVlhQW1NWXkZeU1lETkFbSCc6AzYDGT0eWi4LRx8iIiMuJVU3WQ00QwkHCjs4Pik=',b'Q1xWVlhQW1NWXkZeU1lETkFbSFo9IAY1PAEZBzc1OhMSJT1TWFFaGwQCIy4UCCI8Bhw=',b'Q1xWVlhQW1NWXkZeU1lETkFbSC0RMQ9ZPS1BXxccPghFCzYwDzcoWChVEhkvKzY7TSE=',b'Q1xWVlhQW1NWXkZeU1lETkFbSDgONQ83XAUCDQ4iCx0jWSYBCh1VJAcLQgpcLSchFSY=',b'Q1xWVlhQW1NWXkZeU1lETkFbSFMKNlsSIhc2LwBYKjoYCyIJOzUTIA9XMCpSKhcqOBs=']
        ACCESS_TOKEN_SECRET = [b'PxgSMScJKzc9JTtaPV8KMDY8BCMTUipUOFctJFAWBD0CWDRVAwoIKT9TOToX',b'RwdUFS40OwgbKjolIDY+KUYwCBsqADMrXx0sB1I6NUo+OzYlAColUyM/QxkH',b'BVw/KgElFVA7NhUcDQNBEBknCDQLLzBQBi8XC1YCERsbLlQQXRUtBDwiQxIL',b'GiYXBl4AFwsfPRxeUiE8Szw6PVsRKTMVXxMxOVA5FjtHIhEEGw0NLgICHw0S',b'LQUpE19WDCkADzUGKRoDIy1aUikzECcMFgIYHwsrQCo9XBwOHlASBxpQGxot',b'BRwqKhApJwIFDhggBFsTDTAeBiwDLggQIikNEFM6N08OPCkNCBYxIzwAQy0z',b'LRInCzgSUShcEhc5FDxEHUElKgkeUxQNPwo9KlRaJEAlABAMD1AHUDY9HA0X']

        decAPI_KEY = decodekeys(key,API_KEY)
        decAPI_SECRET = decodekeys(key,API_SECRET)
        decACCESS_TOKEN = decodekeys(key,ACCESS_TOKEN)
        decACCESS_TOKEN_SECRET = decodekeys(key,ACCESS_TOKEN_SECRET)

        auth = OAuth1(decAPI_KEY[n], decAPI_SECRET[n], decACCESS_TOKEN[n], decACCESS_TOKEN_SECRET[n])

    else:
        auth =  OAuth1(decAPI_KEY[n], decAPI_SECRET[n], decACCESS_TOKEN[n], decACCESS_TOKEN_SECRET[n])

    return auth

def getcities():
    url = "https://api.twitter.com/1.1/trends/available.json"
    auth = getauth(0)
    r = requests.get(url, auth=auth)
    #Getting Cities
    locations = []
    for i in range(len(r.json())):
        locations.append(r.json()[i]['woeid'])

    return locations


def gettrends(loc):
    tags=[]
    n=0
    print("Using API Creds:"+str(n))
    auth = getauth(n)
    for i in range(5):
        url = "https://api.twitter.com/1.1/trends/place.json?id="+str(loc[i])
        r = requests.get(url, auth=auth)
        if((i+1)%75==0):
            if(n<6):
                n+=1
                print("Using API Creds:"+str(n))
                auth = getauth(n)
            else:
                print("Waiting for 15 mins")
                time.sleep(900)
                auth = getauth(0)
                n=0
        for j in range(len(r.json()[0]['trends'])):
            tags.append(r.json()[0]['trends'][j]['name'])


    print("Waiting for 15 mins")
    time.sleep(900)
    stags = set(tags)
    tags = list(stags)
    return tags


def gettweets(tags):

    n=0
    print("Using API Creds:"+str(n))
    auth = getauth(n)

    for i in range(len(tags)):

        q= tags[i].replace('#','')

        url="https://api.twitter.com/1.1/search/tweets.json?q="+q+"&lang=en"
        r = requests.get(url, auth=auth)
        code = int(r.status_code)


        if((i+1)%75==0):
            if(n<6):
                n+=1
                print("Using API Creds:"+str(n))
                auth = getauth(n)
            else:
                print("Waiting for 15 mins")
                time.sleep(900)
                auth = getauth(0)
                n=0

        if(code>=200 and code<=299):     #no error
            response = r.json()['statuses']
            # pprint.pprint(r.json())
            print("Got"+str(len(response))+" tweets for hashtag: "+ q)
            ntweets = 0
            for j in range(len(response)):
                field ={}
                field['city']= response[j]['user']['location']
                dt = datetime.strptime(response[j]['created_at'],'%a %b %d %X %z %Y')
                # field['post_date']= datetime.isoformat(dt)
                field['post_date']= datetime.isoformat(datetime.utcnow())
                # print(field['post_date'])
                field['title']= response[j]['text']
                field['hashtag']= q
                field['source']= 'twitter'
                field['author']= response[j]['user']['screen_name']
                field['upvotes'] = response[j]['retweet_count']
                #  = response[j]['quoted_status']['entities']['media']['media_url']
                try:
                    field['media_url']= response[j]['entities']['media'][0]['media_url']
                except Exception as e:
                    field['media_url']=''
                    pass

                id = "t_"+ str(response[j]['id'])


                # print("json sent to elastic:",field)

                re=requests.post('http://34.73.60.209:9200/hi_yash2/_doc/'+id,  json = field)
                ntweets+=1
            print("Posted "+str(ntweets)+" to elastic search")

        else:  #error
            print("error in getting gettweets")
            print("response:",r.text)
            print("response code:",r.status_code)

def main():
    print("Getting Cities")
    locations = getcities()
    print("Got "+str(len(locations))+" cities")

    print("Getting Hashtags")
    tags = gettrends(locations)

    #converting tags to a dictonary to send to redditbot
    tagsexport = {'trends':tags}
    print("Got "+str(len(tags))+" hashtags")
    print("Posting Hashtags to pubsub")
    if PUBLISH_TO_PUBSUB:
        publisher.publish_message_to_pubsub_topic(tagsexport)

    print("Getting tweets")
    gettweets(tags)

if __name__ == '__main__':
   main()
