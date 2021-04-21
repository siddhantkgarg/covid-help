# Covid Help

Get details about hospitals, medicines, oxygen cylinders & plasma donors

## Backend

### Elasticsearch Indicies

1. hospital_beds
2. medicines
3. oxygen

### Elasticsearch Schema

hospital_beds
  - id
  - hospital_name
  - state
  - city
  - beds_count
  - icu_beds_count
  - link
  - comments
  - last_updated
  - created_at
  - verified

medicines
  - id
  - person_name
  - contact
  - medicine_name
  - state
  - city
  - quantity
  - price
  - link
  - comments
  - last_updated
  - created_at
  - verified

oxygen
  - id
  - vendor_name
  - person_name
  - contact
  - state
  - city
  - quantity
  - price
  - link
  - comments
  - last_updated
  - created_at
  - verified     

### CRUD API

End Point: https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev

#### Retrieve data

1. `curl https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev?index=hospital_beds`
2. `curl https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=medicines`
3. `curl https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev?index=oxygen`

#### Create Data

```
curl --location --request POST 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev?index=hospital_beds' \
--header 'Content-Type: application/json' \
--data-raw '{
  "data": {
    "hospital_name": "Test Hospital",
    "beds_count": 12,
    "icu_beds_count": 3,
    "state": "Haryana",
    "city": "Gurgaon",
    "link": "https://test.com/",
    "comments": "Sector 37, Plot no 597",
    "last_updated": "2021-04-20 12:00:00",
    "created_at": "2021-04-20 12:00:00"
  }
}'
```

```
curl --location --request POST 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=medicines' \
--header 'Content-Type: application/json' \
--data-raw '{
  "data": {
    "person_name": "Test",
    "contact": "7206477777",
    "medicine_name": "remdesivir",
    "state": "Haryana",
    "city": "Gurgaon",
    "quantity": 12,
    "price": 3000,
    "link": "https://test.com",
    "comments": "Sector 37, Plot no 597",
    "last_updated": "2021-04-20 12:00:00",
    "created_at": "2021-04-20 12:00:00"
  }
}'
```

```
curl --location --request POST 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=oxygen' \
--header 'Content-Type: application/json' \
--data-raw '{
  "data": {
    "vendor_name":"Test vendor",  
    "person_name": "Test",
    "contact": "7206477777",
    "state": "Haryana",
    "city": "Gurgaon",
    "quantity": 12,
    "price": 3000,
    "link": "https://test.com",
    "comments": "Sector 37, Plot no 597",
    "last_updated": "2021-04-20 12:00:00",
    "created_at": "2021-04-20 12:00:00"
  }
}'
```

#### Update data

```
curl --location --request PATCH 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=medicines' \
--header 'Content-Type: application/json' \
--data-raw '{
  "data": {
    "id": "l7ll9XgBJE6SqQYHNASs",
    "verified": true,
    "last_updated": "2021-04-21 10:59:00"
  },
  "token":"replace_dummy_token"
}'
```

#### Delete data

```
curl --location --request DELETE 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=medicines' \
--header 'Content-Type: application/json' \
--data-raw '{
  "data": {
    "id": "l7ll9XgBJE6SqQYHNASs"
  },
  "token":"replace_dummy_token"
}'
```
