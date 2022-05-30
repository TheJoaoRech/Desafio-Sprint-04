<h1 align="center"> 🛒 API SPRINT 4: GROUP CHALLENGE 🛒 </h1>
<h3 align="center"> This challenge aimed to create an api that stores information about employees and products, integrating MongoDB with Node.js. </h3>


<h1 align> 🔍 Some informations about the project: </h1>

### Node version:
```
14.18.0
```
### NPM version:
```
6.14.15
```
### Libs:
```
"@joi/date": "^2.1.0",
"eslint": "^8.16.0",
"nodemon": "^2.0.16"
"dotenv": "^16.0.1",
"joi": "^17.6.0",
"mongoose": "^6.3.4",
"mongoose-paginate-v2": "^1.6.3",
```
### Frameworks:
```
"express": "^4.18.1"
```

<h1 align=> 🖌️ API authors: </h1>

* **Alex Castelo Coelho** - [Link do perfil](https://github.com/alexcastelocoelho)
* **Graciela Beatriz** - [Link do perfil](https://github.com/gracicomc)
* **João Vítor Rech** - [Link do perfil](https://github.com/TheJoaoRech)

<h1 align> 👣 Steps to run the code: </h1>

## The entire application is contained within the `api` folder.


### 1️⃣ - First install dependencies

    npm install

### 2️⃣ - Run server

    npm run dev

### 3️⃣ - (opitional) Insert values into the database

    You can use the demos.md file to insert values on postman 

<h1 align> 📁 Employees Endpoints: </h1>

## Create an employee

### Request

`POST`

    http://localhost:3000/api/v1/employee/ 
    
    
```
//req body example
{
   "name": "Ana Maria",
   "cpf": "12312312393",
   "office": "gerente",
   "birthday": "20/09/1993"
}
``` 
    
### Response

`Status: 201 Created`

    {
        "name": "Ana Maria",
        "cpf": "12312312393",
        "office": "gerente",
        "situation": "activate",
        "birthday": "1923-09-20T00:00:00.000Z",
        "_id": "6293ddc93c627315829a1ff3",
        "createdAt": "2022-05-29T20:55:37.353Z",
        "updatedAt": "2022-05-29T20:55:37.353Z"
    }
    
    
`Status: 400 Bad Request`
 ```
 {
"message": "Bad Request",
"details": [
    {
      "message": "error message",
    }
  ]
 ```
    
    
## List employees

### Request

`GET`

    http://localhost:3000/api/v1/employee/ 
    
    
### Response

`Status: 200 OK`

    [
       {
        "employee_id": "6293b7698445d775f14fef43",
        "name": "teste 1",
        "cpf": "323132133331",
        "office": "gerente",
        "situation": "activate",
        "birthday": "08/09/2000",
        "createdAt": "2022-05-29T18:11:53.315Z",
        "updatedAt": "2022-05-29T18:11:53.315Z"
      },
      {
        "employee_id": "6293c6c4572b1974e2cb899c",
        "name": "teste 1",
        "cpf": "1",
        "office": "gerente",
        "situation": "activate",
        "birthday": "08/09/2000",
        "createdAt": "2022-05-29T19:17:24.987Z",
        "updatedAt": "2022-05-29T19:17:24.987Z"
      },
      {
        "employee_id": "6293d3fd8948185f0aa069bb",
        "name": "teste 1",
        "cpf": "12",
        "office": "gerente",
        "situation": "activate",
        "birthday": "20/09/1923",
        "createdAt": "2022-05-29T20:13:49.810Z",
        "updatedAt": "2022-05-29T20:13:49.810Z"
      },
    ]
    
    
## Get employee by ID

### Request

`GET`

    http://localhost:3000/api/v1/employee/:id 
    
    
    
### Response

`Status: 200 OK`

    
    {
        "name": "Ana Maria",
        "cpf": "12312312393",
        "office": "gerente",
        "situation": "activate",
        "birthday": "1923-09-20T00:00:00.000Z",
        "_id": "6293ddc93c627315829a1ff3",
        "createdAt": "2022-05-29T20:55:37.353Z",
        "updatedAt": "2022-05-29T20:55:37.353Z"
    }
    

`Status: 400 Bad Request`
 ```
 {
"message": "Bad Request",
"details": [
    {
      "message": "error message",
    }
  ]
 ```
 
 
 ## Update an employee

### Request

`PUT`

    http://localhost:3000/api/v1/employee/:id 
    
    
```
//req body example
{
   "name": "Ana Maria Braga",
}
``` 
    
### Response

`Status: 200 OK`

    {
        "name": "Ana Maria Braga",
        "cpf": "12312312393",
        "office": "gerente",
        "situation": "activate",
        "birthday": "1923-09-20T00:00:00.000Z",
        "_id": "6293ddc93c627315829a1ff3",
        "createdAt": "2022-05-29T20:55:37.353Z",
        "updatedAt": "2022-05-29T20:55:37.353Z"
    }
    
    
`Status: 400 Bad Request`
 ```
 {
"message": "Bad Request",
"details": [
    {
      "message": "error message",
    }
  ]
 ```
 
 
 ## Delete an employee

### Request

`DELETE`

    http://localhost:3000/api/v1/employee/:id 
    
    
### Response

`Status: 204 No Content`

    

`Status: 400 Bad Request`
 ```
 {
"message": "Bad Request",
"details": [
    {
      "message": "error message",
    }
  ]
 ```
 
 
 <h1 align> 📁 Products Endpoints: </h1>

## Create an product

### Request

`POST`

    http://localhost:3000/api/v1/product/ 
    
    
```
//req body example
{
    "name": "Notebook",
    "category": "eletronico",
    "price": "1999.99",
    "employee_id": "6293e3d27e3dfbd289b57b0a"
}
``` 
    
### Response

`Status: 201 Created`

    {
        "name": "Notebook",
        "category": "eletronico",
        "price": "1999.99",
        "employee_id": "6293e3d27e3dfbd289b57b0a",
        "_id": "6293e68c7e3dfbd289b57b14"
    }
    
    
`Status: 400 Bad Request`
 ```
 {
"message": "Bad Request",
"details": [
    {
      "message": "error message",
    }
  ]
 ```
    
    
## List products

### Request

`GET`

    http://localhost:3000/api/v1/product/ 
    
    
### Response

`Status: 200 OK`

    [
      {
          "_id": "6293e68c7e3dfbd289b57b14",
          "name": "Notebook",
         "category": "eletronico",
          "price": "1999.99",
          "employee_id": "6293e3d27e3dfbd289b57b0a"
      },
      {
          "_id": "6293e7a27e3dfbd289b57b16",
          "name": "Geladeira",
          "category": "eletrodomestico",
          "price": "2000.99",
          "employee_id": "6293e3d27e3dfbd289b57b0a"
      },
      {
          "_id": "6293e7b57e3dfbd289b57b18",
          "name": "Guarda Roupas",
          "category": "movel",
          "price": "199.99",
          "employee_id": "6293e3d27e3dfbd289b57b0a"
      }
    ]
    
    
## Get product by ID

### Request

`GET`

    http://localhost:3000/api/v1/product/:id 
    
    
### Response

`Status: 200 OK`

```    
{
    "_id": "6293e7b57e3dfbd289b57b18",
    "name": "Guarda Roupas",
    "category": "Móvel",
    "price": "1999.99",
    "employee_id": "6293e3d27e3dfbd289b57b0a"
}
``` 

`Status: 400 Bad Request`


## Update an product

### Request

`PUT`

    http://localhost:3000/api/v1/product/:id 
    
    
```
//req body example
{
   "name": "Notebook Samsumg",
}
``` 
    
### Response

`Status: 200 OK`

```
   {
      "_id": "6293e7b57e3dfbd289b57b18",
      "name": "Notebook Samsumg",
      "category": "eletronico",
      "price": "2000.99",
      "employee_id": "6293e3d27e3dfbd289b57b0a"
   }

``` 
    
    
`Status: 400 Bad Request`

 ```
 {
"message": "Bad Request",
"details": [
    {
      "message": "error message",
    }
  ]
 ```
 
 
 ## Delete an product

### Request

`DELETE`

    http://localhost:3000/api/v1/product/:id 
    
    
### Response

`Status: 204 No Content`

    

`Status: 400 Bad Request`
 ```
 {
"message": "Bad Request",
"details": [
    {
      "message": "error message",
    }
  ]
 ```
    
    
   


