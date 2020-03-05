var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  res.send('user approved a company');
  // res.json(JSON.parse(result.toString()));
});

router.get('/', function(req, res) {
  res.send("user gets list of companies (approved & unapproved)")
});

module.exports = router;
