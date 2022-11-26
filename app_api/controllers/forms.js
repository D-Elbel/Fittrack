const mongoose = require('mongoose');
const user = mongoose.model('User');

const validateUser = function(req, res){

};

const registerUser = function (req, res) {
    user.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    }, (err, user) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(user);
      }
    });
};   
debugger;
module.exports = {
    validateUser,
    registerUser
};