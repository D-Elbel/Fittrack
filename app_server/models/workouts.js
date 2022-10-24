const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tags: { type: [String], required: true },
  exercises: {
    type: [
      {
        name: String,
        sets: Number,
        reps: Number,
        resistance: Number,
        rest: Number,
      },
    ],
    required: true,
  },
});

mongoose.model("Workout", workoutSchema);
