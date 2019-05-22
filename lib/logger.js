'use strict';

module.exports = (req, res, next) => {
  console.log('LOG: ', req.method, req.path, req.date);
  next();
};