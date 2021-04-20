import json
from elasticsearch import Elasticsearch
from datetime import datetime

es = Elasticsearch([
    {'host': 'localhost'}
])

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
