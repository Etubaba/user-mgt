# USER MANAGEMENT

## Description

This app consists of client and server, the server is built with NodeJS (Express server), while the client is built with Next JS. It enable users to create account and refer and recommend other account to compute users level 2 and level 3 properties of a user

## user created for testing

```bash
$ email : mori@gmail.com
$ password : "12345678"
```

## Guide and Instruction

The index page is the home page, click on register button on the page header to create an account, after registration is completed it will authomatically take the user to the login page, user is expected to login , and have access to his dashboard where the user can edit his profile.

# Backend (API)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ node start
```

## API BASE_URL

```bash
 $ http://localhost:4000
```

# REST API

The REST API to the this app is described below.

## User Registration

### Request

`POST /user/register`

    curl -i -H 'Accept: application/json' -d 'vorname:Leche&nachname=Ama&email=lamus@gmail.com&password=12345&gebracht_von_lvl1:ejjejjdjjdjd&super_commission_permitted:true&street:eurur&location_city:jsjjsj&IBAN:ueueuue' http://localhost:4000/user/register

### Response

    HTTP/1.1 201 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 created
    Connection: close
    Content-Type: application/json

{
"vorname": "Leche ",
"nachname": "Ama",
"email": "mori@gmail.com",
"password": "$argon2id$v=19$m=65536,t=3,p=4$wGaW+VnuCPE0E2AUn9epPg$lZdcgGLVyhryw/20Tj5y4aV7JnR6M365ahxEZt5IMSk",
"gebracht_von_lvl1": "65d51c372ce7ec8e58529bc2",
"super_commission_permitted": true,
"street": "New my huse",
"location_city": "PH",
"IBAN": "4839288388229",
"\_id": "65dba4204d899a06300609cf",
"\_\_v": 0
}

## Validate User Token

### Request

`POST /token/validate`

    curl -i -H 'Accept: application/json' -d 'token=mmsmmsm....' http://localhost:4000/token/validate

### Response

    HTTP/1.1 200
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 Created
    Connection: close
    Content-Type: application/json

{
user: {
\_id: '65dba4204d899a06300609cf',
vorname: 'Leche ',
nachname: 'Ama',
email: 'mori@gmail.com',
password: '$argon2id$v=19$m=65536,t=3,p=4$wGaW+VnuCPE0E2AUn9epPg$lZdcgGLVyhryw/20Tj5y4aV7JnR6M365ahxEZt5IMSk',
gebracht_von_lvl1: '65d51c372ce7ec8e58529bc2',
super_commission_permitted: true,
street: 'New my huse',
location_city: 'PH',
IBAN: '4839288388229',
\_\_v: 0
},
accessToken: 'Some token value',
refreshToken: 'some token value'
}

## User Login

### Request

`POST /user/login`

    curl -i -H 'Accept: application/json' -d 'email=me@mail.com6&password=new88' https://localhost:4000/user/login

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Type: 'application/json'

{
user: {
\_id: '65dba4204d899a06300609cf',
vorname: 'Leche ',
nachname: 'Ama',
email: 'mori@gmail.com',
gebracht_von_lvl1: '65d51c372ce7ec8e58529bc2',
super_commission_permitted: true,
level2: some id value
level3: some id value
street: 'New my huse',
location_city: 'PH',
IBAN: '4839288388229',
}
"accessToken": "gfgh....",
"refreshToken": "jhj...."
}

## Update User Profile

### Request

`POST /user/update/:id`
`Authorization  Bearer`

    curl -i -H authorization:token 'Accept: application/json' vorname:Leche&nachname=Ama&email=lamus@gmail.com&password=12345&gebracht_von_lvl1:ejjejjdjjdjd&super_commission_permitted:true&street:eurur&location_city:jsjjsj&IBAN:ueueuue' http://localhost:4000/user/update/:id

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 Created
    Connection: close
    Content-Type: 'application/json'

{
user: {
\_id: '65dba4204d899a06300609cf',
vorname: 'Leche ',
nachname: 'Ama',
email: 'mori@gmail.com',
gebracht_von_lvl1: '65d51c372ce7ec8e58529bc2',
super_commission_permitted: true,
level2: some id value
level3: some id value
street: 'New my huse',
location_city: 'PH',
IBAN: '4839288388229',
}
}

# Front End

## Getting Started

Firstly ,install run the development server:

```bash
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
