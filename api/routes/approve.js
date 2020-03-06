var express = require("express");
var functions = require("../scripts/functions");
var router = express.Router();

/* GET users listing. */
router.post("/", async function(req, res) {
  try {
    const decoded = await functions.decodeToken(req.headers.authorization); //checks validity of token (throws error if not valid)
    const userId = functions.hashString(
      JSON.stringify({
        username: decoded.username,
        password: decoded.password
      })
    );
    //future: add data checks

    functions.invoke("mychannel", "eKYC", [
      "approveCompany",
      userId,
      req.body.companyId
    ]);
    res.sendStatus(200);
  } catch (error) {
    console.error(`Failed to evaluate transaction: ${error}`);
    res.sendStatus(400);
  }

  // res.send('user approved a company');
  // res.json(JSON.parse(result.toString()));
});

router.get("/", async function(req, res) {
  try {
    const decoded = await functions.decodeToken(req.headers.authorization); //checks validity of token (throws error if not valid)
    const userId = functions.hashString(
      JSON.stringify({
        username: decoded.username,
        password: decoded.password
      })
    );

    const relations = functions.query(["getRelations", "user", userId]);
    const companies = functions.query(["getCompanies"]);

    const parsedRelations = relations.map(id => {
      let username = functions.decodeId(id);
      username = JSON.parse(username);
      return username.username;
    });

    const parsedCompanies = companies.map(id => {
      let username = functions.decodeId(id);
      username = JSON.parse(username);
      return username.username;
    });

    res.json({ approved: parsedRelations, all: parsedCompanies });
  } catch (error) {
    console.error(`Failed to evaluate transaction: ${error}`);
    res.sendStatus(400);
  }
  // res.send("user gets list of companies (approved & unapproved)")
});

module.exports = router;
