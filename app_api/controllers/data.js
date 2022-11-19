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
                "message": "Email not found"
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
        if (req.params) {
            workout
            .find({title: req.params.title})
            .exec((err, workout) => {
              if (!workout) {
                res	
                  .status(404) 
                  .json({	
                    "message": "Email not found"
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
    
            
    } 
}


module.exports = {
    getWorkouts,
    getWorkoutsFiltered
};