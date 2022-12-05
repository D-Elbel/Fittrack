const express = require('express');
const mongoose = require("mongoose");
const user = mongoose.model("User");
const passport = require("passport");
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login', { user : req.user, error : req.flash('error')});

});

const validateUser = function (req, res, next) {
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  });
  req.session.save((err) => {
    if (err) {
      return next(err);
      console.log(err)
    }

    res.redirect("/workouts");
  });
};

const registerUser = function (req, res) {
  user.create(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    },
    (err, user) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(user);
      }
    }
  );
};

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
  validateUser,
  registerUser,
  register,
};
