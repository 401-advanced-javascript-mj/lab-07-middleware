'use strict';

module.exports = (err, req, res, next) => {
  
  console.log(res.statusMessage, res.statusCode);
  //refactor to be a switch statement
  if (res.statusCode === 404) res.statusMessage = 'Route not Found';
  if (res.statusCode === 418) res.statusMessage = 'Error: I am a teapot';
  res.send(res.statusMessage);
};