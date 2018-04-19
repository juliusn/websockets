const express = require('express');
const router = new express.Router();

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  console.log('params.emoji', req.params.emoji);
});

module.exports = router;
