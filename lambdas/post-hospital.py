import json
from elasticsearch import Elasticsearch
from datetime import datetime

es = Elasticsearch([
    {'host': 'localhost'}
])

def lambda_handler(event, context):
    doc = {
        'hospital': event.get('hospital', None),
        'state': event.get('state', None),
        'city': event.get('city', None),
        'beds': event.get('beds', None),
        'icu_beds': event.get('icu_beds', None),
        'link': event.get('link', None),
        'comments': event.get('comments', None),
        'is_verified': False,
        'last_updated': datetime.now(),
    }
    
    try:
        if 'id' in event and event['id']:
            res = es.index(index='hospitals', id=event['id'], body=doc)
        else:
            res = es.index(index='hospitals', body=doc)
            return res['result']
    except Exception as e:
        return "Error in upsert: " + e
