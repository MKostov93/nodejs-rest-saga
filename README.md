# Node.js Saga

> Node.js boilerplate for building REST APIs with support for mongoDb.

## Table of Contents
* [Install & Use](#install-and-use)
* [Commands](#commands)
* [Testing](#testing)

## Install and Use

Start by cloning this repository

then

```sh
# change directory to project root
$ cd into the cloned copy
# install dependencies
$ npm install
```

## Commands

#### `npm run serve`:
- runs a **nodemon watch task** for the all files in the project root.
- sets the environment variable `NODE_ENV` to `development`.

#### `npm test`:
- sets the environment variable `NODE_ENV` to `testing`.

#### `npm run production`:
- sets the environment variable `NODE_ENV` to `production`.

Before running `development` or `production` commands you have to set the database URI to each environment file. If you want to use database for `testing` you should set the database URI in the testing environment file too. They are placed under `config/environments`.

## Testing

All test for this boilerplate uses [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai). So read their docs on further information.