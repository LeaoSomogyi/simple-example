# Simple Example

This project aims to use and abuse from docker-compose to run all needed services once.

Here you will find:

* A NodeJS API using Express and Sequelize
* A front-end client using Angular 9
* A PostgreSQL database with PgAdmin4

## Getting Started

```
git clone https://github.com/LeaoSomogyi/simple-example
```

### Prerequisites

You will need docker in order to run this sample.

### Running

Once you cloned and check if docker is running, just run the follow command and let the magic begin!

```
$ docker-compose build
```

This command will build your docker images.

Once finished, run:

```
$ docker-compose up
```

And all four containers will be running!

## Authors

* **Felipe Somogyi** - *Initial work* - [LeaoSomogyi](https://github.com/LeaoSomogyi)