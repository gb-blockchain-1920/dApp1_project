var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  res.send('login end point');
  // res.json(JSON.parse(result.toString()));
});

router.get('/', function(req, res) {
  res.send("token valid or invalid")
});

module.exports = router;