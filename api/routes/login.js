var express = require("express");
var jwt = require("jsonwebtoken");
var crypto = require('crypto');
var env = require("../scripts/env");
var router = express.Router();
var shasum = crypto.createHash('sha1');

//login end point for getting token
router.post("/", async function(req, res) {
  //check body for only 3 valid parameters
  if (
    Object.keys(req.body).length !== 3 ||
    !req.body.username ||
    !req.body.password ||
    (req.body.type !== "user" && req.body.type !== "company")
  ) {
    return res.sendStatus(400);
  }

  try {
    //hash password for security
    var shasum = crypto.createHash('sha1');
    req.body.password = shasum.digest("base64");
    console.log(req.body.password);

    //create token
    const token = await jwt.sign(req.body, env.jwtKey, { expiresIn: "10" });
    res.send(token);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/", async function(req, res) {
  try {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1]
    const decoded = await jwt.verify(token, env.jwtKey) //checks validity of token (throws error if not valid)
    // console.log(jwt.decode(token));

    res.send(true)
  } catch (e) {
    console.log(e);
    res.send(false)
  }
});

module.exports = router;
