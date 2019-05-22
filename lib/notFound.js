'use strict';

module.exports = (req, res, next) => {

  res.status(404);
  const err = new Error();
  next(err);

};