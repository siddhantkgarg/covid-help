## Deploy Commands

### Prerequisite

Make sure you have added AWS credentials- `aws configure --profile covid_help`

1. `docker run -d -it -v /home/varunkumar/Desktop/github/covid-help/lambdas/python/covidHelpEsFetch:/data python:3-alpine sh`
2. `docker ps` & `docker exec -it 73ba94dadff9 sh`
3. `cd /data`
4. `mkdir packages && cd packages`
5. `pip install elasticsearch -t .`
6. `zip -r ../function.zip .`
7. `cd ..`
8. `vi lambda_function.py`
9. `zip -g function.zip lambda_function.py`
10. `aws lambda update-function-code --function-name covidHelpEsFetch --zip-file fileb://function.zip --profile covid_help`