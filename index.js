const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, x-access-token');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

for (const key in router) {
  app.use(key, router[key]);
}

app.listen(3000, '0.0.0.0');
console.info('App back-flb started on port 3000');