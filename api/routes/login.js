var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('login end point');
  // res.json(JSON.parse(result.toString()));
});

module.exports = router;
