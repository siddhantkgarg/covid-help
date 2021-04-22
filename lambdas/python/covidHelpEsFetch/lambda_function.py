import json

from datetime import datetime
from elasticsearch import Elasticsearch

#es = Elasticsearch('https://vpc-covid-help-ggo4aqwgkblo7uh2oxp4izirjy.ap-south-1.es.amazonaws.com/')
es = Elasticsearch('https://vpc-covid-help2-su24eiu7nbh72svrz4eh52od2i.ap-south-1.es.amazonaws.com/')

def lambda_handler(event, context):
    index = event["queryStringParameters"]["index"]
    print(index)
    filter_list = []
    for k in event["queryStringParameters"].keys():
        if k != "index":
            filter_list.append({ "match": { k: event["queryStringParameters"][k] } })
    print(filter_list)
    try:
        if len(filter_list) == 0:
            res = es.search(index=index, body={"from": 0, "size": 1000, "query": {"match_all": {}}})
        else:
            res = es.search(index=index, body={"query": {"bool": { "must": filter_list }}})
        parsed_res = res.get("hits", {}).get("hits", [])
        print(len(parsed_res))
        return {
            "statusCode": 200,
            "headers": {
              "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
              "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS 
            },
            "body": json.dumps(parsed_res)
        }
    except Exception as e:
        print(e)
        return "Error in fetch: {}".format(e)