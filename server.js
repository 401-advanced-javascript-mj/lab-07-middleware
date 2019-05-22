'use strict';

const express = require('express');
const errorHandler = require('./lib/errorHandler.js');
const notFound = require('./lib/notFound.js');
const date = require('./lib/requestTime.js');
const logger = require('./lib/logger.js');
const squareNumber = require('./lib/squareNumber.js');
const routesCandD = require('./routes/routes.js');


const app = express();

// app.use( (req, res, next) => {
//   console.log('middleware');
//   next('oops');
// })
// app.use((err, req, res, next) => {
//   console.log('from error handler');
// });
app.use(express.json());
app.use(date);
app.use(logger);

app.get('/a', (req,res) => {
  res.status(200).json({route:'Route A', time: req.date});
});

app.get('/b/:number', squareNumber, (req,res) => {
  res.status(200).send({number: req.number});
});

app.use('/', routesCandD);

app.get('/*', notFound);

app.use(errorHandler);

module.exports = { 
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

