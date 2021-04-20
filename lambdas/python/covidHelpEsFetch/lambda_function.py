import json

from datetime import datetime
from elasticsearch import Elasticsearch

es = Elasticsearch('https://vpc-covid-help-ggo4aqwgkblo7uh2oxp4izirjy.ap-south-1.es.amazonaws.com/')

def lambda_handler(event, context):
    try:
        res = es.search(index=event["index"], body={"query": {"match_all": {}}})
        return res.get("hits", {}).get("hits", [])
    except Exception as e:
        return "Error in fetch: {}".format(e)