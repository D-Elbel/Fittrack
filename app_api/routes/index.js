const express = require('express');
const router = express.Router();
const passport = require("passport");
const ctrlForms = require('../controllers/forms');
const ctrlData = require('../controllers/data');

//forms
router.get('/login', (req, res) => {
    res.render('login', { user : req.user, error : req.flash('error')});
  
});
  

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/workouts');
    });

    if(req.isAuthenticated()){
        console.log(req.user);
    }
});

router  
    .route('/register')
    .post(ctrlForms.register);


//data
router
    .route('/data')
    .get(ctrlData.getWorkouts)

router
    .route('/data/filtered/:title')
    .get(ctrlData.getWorkoutsFiltered)



module.exports = router;