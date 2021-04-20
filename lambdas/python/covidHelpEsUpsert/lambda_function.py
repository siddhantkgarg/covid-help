import json

from datetime import datetime
from elasticsearch import Elasticsearch

es = Elasticsearch('https://vpc-covid-help-ggo4aqwgkblo7uh2oxp4izirjy.ap-south-1.es.amazonaws.com/')

def lambda_handler(event, context):
    index = event["queryStringParameters"]["index"]
    print(index)
    try:
        event['body'] = json.loads(event['body'])
        doc = event['body']['data']
        if 'id' in event['body']['data'] and event['body']['data']['id']:
            if event['body']['token'] == 'replace_dummy_token':
                res = es.update(index=index, id=event['body']['data']['id'], body={'doc': doc})
                return {
                    "statusCode": 200,
                    "headers": {
                        "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
                        "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS 
                    },
                    "body": json.dumps({"status": res['result']})
                }
            else:
                return {
                    "statusCode": 401,
                    "headers": {
                        "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
                        "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS 
                    },
                    "body": json.dumps({"status": "Authorization failed"})
                }
        else:
            doc['verified'] = False
            res = es.index(index=index, body=doc)
            return {
                "statusCode": 200,
                "headers": {
                    "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
                    "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS 
                },
                "body": json.dumps({"status": res['result']})
            }
    except Exception as e:
        print(e)
        return "Error in upsert: {}".format(e)