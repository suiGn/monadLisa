# Force Secure Express

[![Travis Build](https://img.shields.io/travis/rphansen91/force-secure-express.svg?style=flat-square)](https://travis-ci.org/rphansen91/force-secure-express)
[![Codecov](https://img.shields.io/codecov/c/github/rphansen91/force-secure-express.svg?style=flat-square)](https://codecov.io/gh/rphansen91/force-secure-express)
[![npm](https://img.shields.io/npm/v/force-secure-express.svg?style=flat-square)](https://www.npmjs.com/package/force-secure-express)
[![downloads](https://img.shields.io/npm/dw/force-secure-express.svg?style=flat-square)](https://www.npmjs.com/package/force-secure-express)

## Description

Express middleware to redirect insecure http requests to https.

## Install

`npm install force-secure-express --save`

## Usage

```js
const forceSecure = require("force-secure-express");
const express = require("express");
const app = express();

const port = Number(process.env.PORT) || 3000;

app.use(forceSecure([
    "example.com",
    "staging.example.com"
]));

app.use(express.static("./public"));

app.get("*", (req, res) => {
  res.sendFile("./public/index.html")
});

app.listen(port, () => {
  logger.info(`${port} we have liftoff \u{1F680}`)
});
```