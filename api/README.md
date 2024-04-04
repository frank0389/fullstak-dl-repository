# API User  

Esta api se encarga de gestionar los usuarios del sistema. Utiliza una Base de datos MySQL para almacenar los usuarios. De cada usuario se guarda información referente a los username, email, password, name y lastName.  

## Frameworks and tools
Para la construcción de dicha api se utilizarón las sisguientes tecnologias:

 - [Node.js](https://nodejs.org/en): Node es un runtime de ejecución de javascript de código abierto que permite que se pueda ejecutar codigo javascript del lado del servidor.   
 - [express.js](https://expressjs.com/es/): Es un framework para desarrollar servidores http bajo la arquitectura REST.
 - [sequalizer](https://sequelize.org/): Sequelize es un ORM moderno de TypeScript y Node.js para Oracle, Postgres, MySQL, MariaDB, SQLite y SQL Server, y más. Con soporte sólido para transacciones, relaciones, carga entusiasta y diferida, replicación de lectura y más.
 - [mysql2](https://sidorares.github.io/node-mysql2/docs): Es un cliente MySQL para Node.js  enfocado en el rendimiento. Admite declaraciones preparadas, codificaciones que no sean utf8, protocolo de registro binario, compresión, ssl y mucho más.

## API Reference

#### Api Header

| Name | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `API_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.a4ZLo2TxNUb8mj4ff9z9v1IE3PlSPpFuLCT45ljOVUI` | **Required**. Your API key |

#### Get health
Endpoint para consultar el estado de la api. Te permite saber la versión de código desplegada, el nombre del host o el estado de la conexión con la base datos.

```
  GET /health
```

##### Response success 
```json
 {
    "app": {
        "version": "1.0.0",
        "name": "api",
        "environment": "development"
    },
    "hostname": "DESKTOP-MKIS7I9",
    "MYSQLConnection": "Ok"
}
```

#### create users
Endpoint para insertar un usuario en la bd.

```
  POST /users
```


##### Headers

| Name | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `Content-Type` | `application/json` | **Required**. Tipo de contenido |

##### Request body 
```json
    {
        "id": 16,
        "userName": "frank",
        "firstName": "Frank Enrique",
        "lastName": "Nicolau",
        "password": "hdgdfdfdfd",
        "email": "frank.nicolau03@gmail.com"
    }
```
##### Response success 201 
```json
{
        "id": 16,
        "userName": "frank",
        "firstName": "Frank Enrique",
        "lastName": "Nicolau",
        "password": "hdgdfdfdfd",
        "email": "frank.nicolau03@gmail.com"
    }

```

#### update users
Endpoint para actualizar un usuario en la bd.

```
  PUT /users
```

##### Headers

| Name | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `Content-Type` | `application/json` | **Required**. Tipo de contenido |

##### Parameters
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del usuario a modificar|

##### Request body 
```json
    {
        "id": 16,
        "userName": "frank",
        "firstName": "Frank Enrique",
        "lastName": "Nicolau",
        "password": "hdgdfdfdfd",
        "email": "frank.nicolau03@gmail.com"
    }
```
##### Response success 200 
```json
{
        "id": 16,
        "userName": "frank",
        "firstName": "Frank Enrique",
        "lastName": "Nicolau",
        "password": "hdgdfdfdfd",
        "email": "frank.nicolau03@gmail.com"
    }
```

#### get user
Endpoint para obtener un usuario en la bd.

```
  GET /users/:id
```
##### Parameters
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del usuario |

## Response success 200 
```json
{
        "id": 16,
        "userName": "frank",
        "firstName": "Frank Enrique",
        "lastName": "Nicolau",
        "password": "hdgdfdfdfd",
        "email": "frank.nicolau03@gmail.com"
    }
```

#### get all users
Endpoint para obtener todos los usuarios del sistema.

```
  GET /users
```

##### Response success 200 
```json
[
    {
        "id": 16,
        "userName": "frank",
        "firstName": "Frank Enrique",
        "lastName": "Nicolau",
        "password": "hdgdfdfdfd",
        "email": "frank.nicolau03@gmail.com"
    }
]
```

#### search users
Endpoint para obtener todos los usuarios dado sus propiedades.

```
  GET /search?property=lastName&value=Nicolau&limit=5&offset=0
```

##### Parameters
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `property`      | `string` | **Required**. Nombre de la propiedad por la que se quiere filtrar|
| `value`      | `string` | **Required**. Valor de la propiedad|
| `limit`      | `string` | **Required**. Limite de la consulta|
| `offset`      | `string` | **Required**. Offset de la consulta|

##### Response success 200 
```json
[
    {
        "id": 16,
        "userName": "frank",
        "firstName": "Frank Enrique",
        "lastName": "Nicolau",
        "password": "hdgdfdfdfd",
        "email": "frank.nicolau03@gmail.com"
    }
]
```

#### delete user
Endpoint para eliminar un usuario en el sistema.

```
  GET /users/:id
```
##### Parameters
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del usuario a eliminar|

## Response success 200 
```
 Ok
```