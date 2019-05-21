'use strict';

const express = require('express');
const router = express.Router();

router.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

router.get('/d', (req,res, next) => {
  res.status(418);
  next(new Error());
});

module.exports = router;