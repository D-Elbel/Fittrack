const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  exercises: [{name: String, sets: Number, reps: Number, resistance: Number, rest: Number}],
});



mongoose.model("Workout", workoutSchema);


