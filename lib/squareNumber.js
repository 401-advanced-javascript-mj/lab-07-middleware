'use strict';

module.exports = (req, res, next) => {
  let squared = req.params.number * req.params.number;
  req.number = squared;
  next();
};