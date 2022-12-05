const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  firstname: { type: String, required: true, minlength: 1, maxlength: 25 },
  lastname: { type: String, required: true, minlength: 1, maxlength: 25 },
  email: { type: String, required: true, minlength: 3, maxlength: 320 },
  password: {type: String}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
