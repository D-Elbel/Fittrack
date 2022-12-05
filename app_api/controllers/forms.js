const express = require('express');
const mongoose = require("mongoose");
const user = mongoose.model("User");
const passport = require("passport");
const router = express.Router();


const register = function (req, res, next) {
  user.register(
    new user({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.username,
      username: req.body.username,
    }),
    req.body.password,
    (err, user) => {
      console.log(user + err);
      if (err) {
        return res.render("register", { error: err.message });
      }
      console.log("Account created");
      passport.authenticate("local")(req, res, () => {
        req.session.save((err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/");
        });
      });
    }
  );
};

module.exports = {
  register
};
