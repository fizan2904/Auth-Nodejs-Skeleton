# Authentication Module Skeleton

A simple kickstart api microservice for handling user authentication faster

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Nodejs

```
http://nodejs.org/
```

Mongodb

```
http://mongodb.com/
```

Docker

```
https://www.docker.com/
```
* Gulp

```
http://gulpjs.com/
```

### Lift Server

A step by step series of examples that tell you have to get a development env running

* Docker

```
sudo docker-compose build
sudo docker-compose up
```

* Local

Change the mongodb url in the src/app.js file to local url

```
gulp
npm start
```

## Running the tests

To test the server running properly, a http request has to be sent to the server

```
curl http://localhost:3000/test
```

the response will be
```
{"message":"Everything's OK"}
```

### User Endpoints

All the following paths will be added after the base url http://localhost:3000/

- [user/signup](http://localhost:3000/user/signup) - To create a new user

## Authors

Built from scratch by Fizan Nagarchi

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
