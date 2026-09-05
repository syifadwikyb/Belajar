# Address API Spec

## Create Address API
Endpoint : POST /api/contacts/:ContactId/addresses

Headers :
- Autorization : token

Request Body :
```json
{
  "street" : "Jalan apa",
  "city" : "Kota apa",
  "province" : "Provinsi apa",
  "country" : "Negara apa",
  "postal_code" : "Kode pos"
}
```

Request Body Success :

```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode pos"
  }
}
```

Request Body Error :
```json
{
  "errors" : "Country is required"
}
```

## Update Address API
Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Autorization : token

Request Body :
```json
{
  "street" : "Jalan apa",
  "city" : "Kota apa",
  "province" : "Provinsi apa",
  "country" : "Negara apa",
  "postal_code" : "Kode pos"
}
```

Request Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "Kode pos"
  }
}
```

Request Body Error :
```json
{
  "errors" : ""
}
```


## Get Address API
Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Autorization : token

Request Body Success :

```json
{
  "data": {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode pos"
  }
}
```

Request Body Error :
```json
{
  "errors" : "Contact is not found"
}
```


## List Address API
Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Autorization : token

Request Body Success :

```json
{
  "data": [
    {
      "id" : 1,
      "street" : "Jalan apa",
      "city" : "Kota apa",
      "province" : "Provinsi apa",
      "country" : "Negara apa",
      "postal_code" : "Kode pos"
    },
    {
      "id" : 2,
      "street" : "Jalan apa",
      "city" : "Kota apa",
      "province" : "Provinsi apa",
      "country" : "Negara apa",
      "postal_code" : "Kode pos"
    }
  ]
}
```

Request Body Error :
```json
{
  "errors" : "Contact is not found"
}
```

## Remove Address API
Endpoint : DELETE /api/contacts/:id/addresses

Headers :
- Autorization : token

Request Body Success :
```json
{
  "data": "Oke"
}
```

Request Body Error :
```json
{
  "errors" : "Contact is not found"
}
```