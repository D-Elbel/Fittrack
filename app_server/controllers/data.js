const workouts = function (req, res) {
  res.render("workouts", {title: "Workouts",
    workouts:[ 
      
        {title: "Back & Biceps",
        tags: ["Biceps", "Brachialis", "Traps", "Lats"],
        exercises:[
          {name: "Hammer Curls",sets: 3,reps: 3,resistance: 17.5,rest: 90,},
          { name: "Bench Rows", sets: 3, reps: 8, resistance: 30, rest: 120 },
          { name: "Shrugs", sets: 3, reps: 25, resistance: 32.5, rest: 120 },
        ]},

        {title: "Chest & Triceps",
        tags: ["Triceps", "Lateral Deltoid", "Rear Deltoid"],
        exercises:[
          {name: "Dumbbel Press",sets: 3,reps: 3,resistance: 25,rest: 120},
          { name: "Front Riases", sets: 3, reps: 8, resistance: 17.5, rest: 90 },
          { name: "Lateral Raises", sets: 3, reps: 12, resistance: 10, rest: 90 }          
        ]}
      
    ]
  });
};

module.exports = {
  workouts,
};
