const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true, minlength: 1, maxlength: 25 },
  lastname: { type: String, required: true, minlength: 1, maxlength: 25 },
  email: { type: String, required: true, minlength: 3, maxlength: 320 },
  password: { type: String, minlength: 6, maxlength: 20, required: true },
});

mongoose.model("User", userSchema);
