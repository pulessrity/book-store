const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const staff = require('./staff')
const startApp = require('./ioStart')
const port =3000
app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }))// for parsing application/x-www-form-urlencoded
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token,Access-Control-Allow-Origin");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use('/staff',staff)
startApp(app,port)