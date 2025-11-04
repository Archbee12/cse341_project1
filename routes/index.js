// We require express and routes etc
const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.use('/contacts', require('./contacts'));

module.exports = router;