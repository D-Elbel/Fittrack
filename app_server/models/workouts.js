const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tags: { type: [String], required: true },
  exercises: {
    type: [
      {
        name: {type: String},
        sets: {type: Number, min: 0},
        reps: {type: Number, min: 0},
        resistance: {type: Number, min: 0},
        rest: {type: Number, min: 30},
      },
    ],
    required: true,
  },
});

mongoose.model("Workout", workoutSchema);
