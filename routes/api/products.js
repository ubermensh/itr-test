const express = require("express");
const passport = require("passport");
const rp = require('request-promise');
const User = require("../../models/User");
const router = express.Router();

router.post("/search",
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
  const url = `${process.env.API_URL}/search/products?query=${req.body.query}`;
    console.log('SEARCH ', req.body.query, url);
    rp(url)
        .then(function(data) {
          res.send(data);
        })
        .catch(function(err) {
          console.log(err);
        });
});

router.post("/favorite",
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const {key, userId} = req.body;
    User.updateOne({ email }).then(user => {
      res.send(user)}
    );
});
module.exports = router;
