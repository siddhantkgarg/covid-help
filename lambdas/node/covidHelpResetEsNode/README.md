## Deploy Commands

### Prerequisite

Make sure you have added AWS credentials- `aws configure --profile covid_help`

1. `zip -r function.zip .`
2. `aws lambda update-function-code --function-name covidHelpInitNode --zip-file fileb://function.zip --profile covid_help`