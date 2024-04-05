# Digital Learning repository
Este es el repositorio para el test de fullstack de [Digital Learning](https://www.dl.cl/)

## Authors

- [@frank0389](https://github.com/frank0389)


## Environment Variables
Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

`API_KEY`

`MYSQL_TAG`

`ROOT_PASSWORD`

`FRONT_VERSION`

`API_VERSION`

`NODE_ENV`

`DB_NAME`

`DB_USER`

`DB_PASSWORD` 

`DB_HOST`


## Deployment
Para correr el test de fullstack solo necesita tener instalado docker y docker-compose en su ordenador. Se para en el directorio del proyecto y ejecuta el comando.

```
 docker-compose up -d
```

### docker-compose
```
version: '3.1'
services:
  db:
    restart: always
    image: percona/percona-server:${MYSQL_TAG}
    container_name: db
    logging:
  #      driver: none
         driver: "json-file"
         options:
             max-size: "10m"
             max-file: "10"
  #  command: 
    environment:
      MYSQL_ROOT_PASSWORD: ${ROOT_PASSWORD}
    ports:
      - '3306:3306'
    volumes:
      # - ./mysql/data:/var/lib/mysql
      - ./mysql/conf/my.cnf:/etc/mysql/conf.d/my.cnf
      - ./mysql/scripts:/docker-entrypoint-initdb.d
    ulimits:
      nofile:
        soft: 20000
        hard: 40000
    command: [--ssl=0]
    healthcheck:
      test: ["CMD", "mysqladmin" ,"ping", "-utest", "-pgateway*2022"]
      interval: 30s
      timeout: 60s
      retries: 5
      start_period: 80s
  api:
    restart: always
    build:
      context: ./api
    image: api:${API_VERSION}
    container_name: frontend
    ports:
      - 3000:8080
    environment:
      NODE_ENV: ${NODE_ENV}
      API_KEY: ${API_KEY}
      DB_NAME: ${DB_NAME}
      DB_USER: ${DB_USER}
      DB_PASSWORD: ${DB_PASSWORD}
      DB_HOST: ${DB_HOST}
    healthcheck:
      test: ["CMD", "nc", "-z","localhost", "3000"]
      interval: 10s
      start_period: 180s
      retries: 20
    depends_on:
      - db
  frontend:
    restart: always
    build:
      context: ./frontend
    image: frontend:${FRONT_VERSION}
    container_name: frontend
    ports:
      - 80:80
    environment:
      NODE_ENV: ${NODE_ENV}
      API_KEY: ${API_KEY}

```

## Version control
 4/04/2024 => Se creo el fichero readme.md por primera vez   
 4/04/2024 => Se Termino la actualización del fichero readme.md 