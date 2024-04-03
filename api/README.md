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