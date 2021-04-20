import json

from datetime import datetime
from elasticsearch import Elasticsearch

es = Elasticsearch('https://vpc-covid-help-ggo4aqwgkblo7uh2oxp4izirjy.ap-south-1.es.amazonaws.com/')

def lambda_handler(event, context):
    try:
        doc = event['data']
        if 'id' in event['data'] and event['data']['id']:
            if event['token'] == 'replace_dummy_token':
                res = es.update(index=event['index'], id=event['data']['id'], body={'doc': doc})
                return res['result']
            else:
                return "Authorization failed"
        else:
            doc['verified'] = False
            res = es.index(index=event['index'], body=doc)
            return res['result']
    except Exception as e:
        return "Error in upsert: {}".format(e)