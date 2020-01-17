const express = require("express");
const passport = require("passport");
const rp = require('request-promise');
const router = express.Router();

router.post("/search",
  passport.authenticate('jwt', { failureRedirect: `${process.env.FRONT_URL}/landing` }),
  (req, res) => {
  const url = `${process.env.API_URL}/search/schemas?query=${req.body.query}`;
    console.log('SEARCH ', req.body.query, url);
    rp(url)
        .then(function(data) {
          console.log(data);
          res.send(data);
        })
        .catch(function(err) {
          console.log(err);
        });
});
module.exports = router;
