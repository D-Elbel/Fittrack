const mongoose = require('mongoose');
const workout = mongoose.model('Workout');


const getWorkouts = function(req, res) {
    workout
    .find()
    .exec((err, workouts) => {
        if (!workouts) {
            res	
            .status(404) 
            .json({	
                "message": "No workouts found"
            });	 
            return;
        } else if (err) {
            res	
            .status(404) 
            .json(err); 
            return; 	
        }
        res		
            .status(200)
            .json(workouts);
        }); 
}

const getWorkoutsFiltered = function(req, res){
  if (req.params && req.params.title) {
            workout
            .find({title: req.params.title})
            .exec((err, workout) => {
              if (!workout) {
                res	
                  .status(404) 
                  .json({	
                    "message": "Workout title not found"
                  });	 
                return;
              } else if (err) {
                res	
                  .status(404) 
                  .json(err); 
                return; 	
              }
              res		
                .status(200)
                .json(workout);
            });
          } else {
            res	
              .status(404) 
              .json({	
                "message": "No title in request"
              });	 
          }
}


module.exports = {
    getWorkouts,
    getWorkoutsFiltered
};