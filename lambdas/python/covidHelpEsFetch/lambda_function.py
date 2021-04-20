import json

from datetime import datetime
from elasticsearch import Elasticsearch

es = Elasticsearch('https://vpc-covid-help-ggo4aqwgkblo7uh2oxp4izirjy.ap-south-1.es.amazonaws.com/')

def lambda_handler(event, context):
    index = event["queryStringParameters"]["index"]
    print(index)
    try:
        res = es.search(index=index, body={"query": {"match_all": {}}})
        parsed_res = res.get("hits", {}).get("hits", [])
        print(len(parsed_res))
        return {
            "statusCode": 200,
            "body": json.dumps(parsed_res)
        }
    except Exception as e:
        print(e)
        return "Error in fetch: {}".format(e)