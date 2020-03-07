var express = require("express");
var functions = require("../scripts/functions");
var router = express.Router();

/* GET users listing. */
router.get("/", async function(req, res) {
  try {
    const decoded = await functions.decodeToken(req.headers.authorization); //checks validity of token (throws error if not valid)

    //throw error if not a company
    if (decoded.type !== "company") {
      return res.sendStatus(400);
    }

    //get id using encode functionality
    const companyId = functions.encodeId(
      JSON.stringify({
        username: decoded.username,
        password: decoded.password
      })
    );

    //get array of user ids
    const relations = functions.query("mychannel", "eKYC", ["getRelations", companyId]).then(
      output => {
        let userData = []; //get user data
        output.forEach(id => {
          const data =  await functions.query("mychannel", "eKYC", ["getData", id.toString()])
          const temp = JSON.parse(data.userDetails)
          const userDetails = Object.keys(temp)
          const parsedDetails = JSON.parse(userDetails[0])
          userData.push(parsedDetails)
        })
        return res.json(userData)
      }
    );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

  // res.send('get company data endpoint');
  // res.json(JSON.parse(result.toString()));
});

module.exports = router;
