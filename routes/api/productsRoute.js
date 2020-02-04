const express = require("express");
const passport = require("passport");
const rp = require('request-promise');
const User = require("../../models/User");
const  jwt_decode = require("jwt-decode");
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

router.get("/favorite",
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const user = jwt_decode(req.headers.authorization);
    console.log('favorite', user.id);
    res.send({'getFavorites':[]});
});

router.post("/favorite",
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const user = jwt_decode(token);
    console.log('favorite add', user.id, 'product', req.body.product);
    res.send({'added': true});
    //const {key, userId} = req.body;
});

router.delete("/favorite:productId",
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const {productId } = req.params;  
    const user = jwt_decode(token);
    console.log('DELETE favorite: user, product', user.id, productId);
    res.send({'deleted': true});
});
module.exports = router;
