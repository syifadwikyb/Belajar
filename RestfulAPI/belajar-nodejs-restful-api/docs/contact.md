# Contact API Spec

## Create Contact API
Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :
```json
{
  "first_name" : "Syifa",
  "last_name" : "Dwiky Basamala",
  "email" : "dwikyb@gmail.com",
  "phone" : "0865275362537" 
}
```

Response Body Success :
```json
{
  "data" : {
    "id" : 1,
    "first_name" : "Syifa",
    "last_name" : "Dwiky Basamala",
    "email" : "dwikyb@gmail.com",
    "phone" : "0865275362537"
  }
}
```
Response Body Error :
```json
{
  "error" : "Email is not vaid format"
}
```

## Update Contact API
Endpoint : PUT /api/contacts/:id

Headers :
- Authorization : token

Request Body :
```json
{
  "first_name" : "Syifa",
  "last_name" : "Dwiky Basamala",
  "email" : "dwikyb@gmail.com",
  "phone" : "0865275362537" 
}
```

Response Body Success :
```json
{
  "data" : {
    "id" : 1,
    "first_name" : "Syifa",
    "last_name" : "Dwiky Basamala",
    "email" : "dwikyb@gmail.com",
    "phone" : "0865275362537"
  }
}
```
Response Body Error :
```json
{
  "error" : "Email is not vaid format"
}
```

## Get Contact API
Endpoint : GET /api/contacts/:id

Headers :
- Authorization : token

Response Body Success :
```json
{
  "data" : {
    "id" : 1,
    "first_name" : "Syifa",
    "last_name" : "Dwiky Basamala",
    "email" : "dwikyb@gmail.com",
    "phone" : "0865275362537"
  }
}
```
Response Body Error :
```json
{
  "error" : "Contact is not found"
}
```

## Search Contact API
Endpoint : GET /api/contacts

Headers :
- Authorization : token

Query params :
- name : Search by first_name or last_name, using like, optional
- email : Search by email, using like, optional 
- phone : Search by number phone, using like, optional
- page : Search number of page, default 1
- size : Search per page, default 10

Response Body Success :
```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Syifa",
      "last_name": "Dwiky Basamala",
      "email": "dwikyb@gmail.com",
      "phone": "0865275362537"
    },
    {
      "id": 2,
      "first_name": "Syifa",
      "last_name": "Dwiky Basamala",
      "email": "dwikyb@gmail.com",
      "phone": "0865275362537"
    }
  ],
  "paging": {
    "page": 1,
    "total_pages" : 3,
    "total_items" : 30
  }
}
```
Response Body Error :
```json

```

## Remove Contact API
Endpoint : DELETE /api/contacts/:id

Headers :
- Authorization : token

Response Body Success :
```json
{
  "data" : "Oke"
}
```
Response Body Error :
```json
{
  "error" : "Contact is not found"
}
```