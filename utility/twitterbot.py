#Imports
import requests
import json
import pprint
import time
from requests_oauthlib import OAuth1
from Crypto.Cipher import XOR
import base64
import sys


def main():
#     key = sys.argv[0]
    key = "thebigbangtheory"
    filename = sys.argv[1]

    locations = getcities()
    tags = gettrends(locations)
    tweets = gettweets(tags)

if __name__ == '__main__':
   main()

key = "thebigbangtheory"

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
    for i in range(149):
        url = "https://api.twitter.com/1.1/trends/place.json?id="+str(loc[i])
        r = requests.get(url, auth=auth)
        if((i+1)%75==0):
            print("i:"+str(i))
            if(n<5):
                n+=1
                print("Using API Creds:"+str(n))
                auth = getauth(n)
            else:
                print("Waiting for 15 mins")
                time.sleep(900)
                auth = getauth(0)
                n=0
        for j in range(len(r.json()[0]['trends'])):
            tags.append([r.json()[0]['trends'][j]['name'],r.json()[0]['trends'][j]['tweet_volume']])
    return tags

def gettweets(tags):
    fields=[]   #structure [[city,date,tweet,hashtag,t_id,source]]

    for i in range(len(tags)):
        print(tags[i])
        field =[]
        q= tags[i][0].split('#')
        if(len(q)>1):
            q= q[1]
        else:
            q = q[0]

        url="https://api.twitter.com/1.1/search/tweets.json?q="+str(q)+"&result_type=popular&lang=en"
        r = requests.get(url, auth=auth)
        print(r.json())
        for i in range(len(r.json()['statuses'])):

            field.append(r.json()['statuses'][i]['user']['location'])
            field.append(r.json()['statuses'][i]['created_at'])
            field.append(r.json()['statuses'][i]['text'])
            field.append(q)
            field.append("t_"+str(r.json()['statuses'][i]['id']))
            field.append("twitter")

        fields.append(field)
    return fields
