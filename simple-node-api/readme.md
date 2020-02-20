# Simple Node API

This project aims to create a simple user CRUD API using Node.js and PostgreSQL.

### Prerequisites

Download NodeJS on https://nodejs.org/en/download/ and choose your OS <br />
Download PostgreSQL on https://www.postgresql.org/download/ and choose your OS <br />
Get used with Sequelize ORM: https://sequelize.org/master/manual/getting-started.html

### Installing

Once you cloned the project run the follow command to restore dependencies:

```
npm i
```

To run project migrations:

```
npx sequelize db:migrate
```

To run all seeds

```
npx sequelize-cli db:seed:all
```

To create new migrations:

```
npx sequelize migration:create --name=migration-name
```

To create new data seed:

```
npx sequelize-cli seed:generate --name seed-name
```

Then just run the follow command to start your API on http://localhost:3000


```
node .
```

## Authors

* **Felipe Somogyi** - *Initial work* - [LeaoSomogyi](https://github.com/LeaoSomogyi)
