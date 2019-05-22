'use strict';

module.exports = (req, res, next) => {
  const date = new Date();
  req.date = date;
  next();
};