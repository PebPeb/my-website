
# Getting Started

## Configuring database

The following user configurations need to be defined for the data base. Create `database/.env` and define the following.

```s
MYSQL_ROOT_PASSWORD=<root_password>
MYSQL_DATABASE=<database>
MYSQL_USER=<sql_user>
MYSQL_PASSWORD=<sql_password>
```

## Starting Containers

``` bash
docker-compose up -d
docker-compose up -d --build
docker-compose down
```

Docker compose includes build profiles that allow for allowing the running of a specific run state. 

``` bash
docker-compose --profile build-frontend up
```



