import json
from elasticsearch import Elasticsearch
from datetime import datetime

es = Elasticsearch([
    {'host': 'localhost'}
])

def lambda_handler(event, context):
    try:
        res = es.search(index=event['index'], body={
            "query": {
                "match_all": {}
            }
        })
        return res.get('hits', {}).get('hits', [])
    except Exception as e:
        return "Error in fetch: {}".format(e)
