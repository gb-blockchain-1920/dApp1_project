var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get user data endpoint');
  // res.json(JSON.parse(result.toString()));
});

router.post('/', function(req, res, next) {
  res.send('post user data endpoint');
  // res.json(JSON.parse(result.toString()));
});

module.exports = router;
