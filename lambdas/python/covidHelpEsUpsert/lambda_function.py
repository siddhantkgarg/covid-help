import json

from datetime import datetime
from elasticsearch import Elasticsearch

es = Elasticsearch('https://vpc-covid-help-ggo4aqwgkblo7uh2oxp4izirjy.ap-south-1.es.amazonaws.com/')

def lambda_handler(event, context):
    index = event["queryStringParameters"]["index"]
    print(index)
    try:
        doc = event['body']['data']
        if 'id' in event['body']['data'] and event['body']['data']['id']:
            if event['body']['token'] == 'replace_dummy_token':
                res = es.update(index=index, id=event['body']['data']['id'], body={'doc': doc})
                return {
                    "statusCode": 200,
                    "body": json.dumps({"status": res['result']})
                }
            else:
                return {
                    "statusCode": 400,
                    "body": json.dumps({"status": "Authorization failed"})
                }
        else:
            doc['verified'] = False
            res = es.index(index=index, body=doc)
            return {
                "statusCode": 200,
                "body": json.dumps({"status": res['result']})
            }
    except Exception as e:
        print(e)
        return "Error in upsert: {}".format(e)
