# Covid Help

Get details about hospitals, medicines, oxygen cylinders & plasma donors

## Backend

1. API End point: https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/_beds
2. Elasticsearch Indexes: `hospital_beds`, `medicines`, `oxygen`
3. Retrieve data: GET https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/_beds/?index=oxygen
4. Update data (internal only): PATCH: https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/_beds/?index=oxygen
5. Create Data: POST https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/_beds/?index=oxygen
6. Sample Post Curl request

```
curl --location --request POST 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=hospital_beds' \
--header 'Content-Type: application/json' \
--data-raw '{
  "data": {
    "hospital_name": "",
    "beds_count": "",
    "icu_beds_count": "9311188123",
    "state": "Haryana",
    "city": "Gurgaon",
    "link": "",
    "comments": "Sector 37, Plot no 597",
    "last_updated": "2021-04-20 12:00:00",
    "created_at": "2021-04-20 12:00:00"
  }
}'
```