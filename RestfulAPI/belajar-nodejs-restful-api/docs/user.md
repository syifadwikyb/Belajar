# User API Spec

## Register User API
Endpoint : POST /api/users

Request Body :
```json
{
  "username" : "dwikyb",
  "password" : "password",
  "name" : "Syifa Dwiky Basamala"
}
```

Response Body Success :
```json
{
  "data" : {
    "username" : "dwikyb",
    "name" : "Syifa Dwiky Basamala"
  }
}
```
Response Body Error :
```json
{
  "error" : "Username already to used"
}
```

## Login User API
Endpoint : POST /api/users/login

Request Body :
```json
{
  "username" : "dwikyb",
  "password" : "password",
}
```

Response Body Success :
```json
{
  "data" : {
    "token" : "unique-token"
  }
}
```
Response Body Error :
```json
{
  "error" : "Username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :
    - Authorization : token

Request Body :

```json
{
  "name" : "Syifa Dwiky Basamala lagi" //opsional
  "password" : "new password" //opsional
}
```

Response Body Success :
```json
{
  "data" : {
    "username" : "dwikyb",
    "name" : "Syifa Dwiky Basamala lagi"
  }
}
```
Response Body Error :
```json
{
  "error" : "Name length max 100"
}
```

## Get User API
Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success :
```json
{
  "data" : {
    "username" : "dwikyb",
    "name" : "Syifa DWiky Basamala"
  }
}
```
Response Body Error :
```json
{
  "error" : "Unauthorized"
}
```

## Logout User API
Endpoint : DELETE /api/users/logout

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
  "error" : "Unauthorized"
}
```