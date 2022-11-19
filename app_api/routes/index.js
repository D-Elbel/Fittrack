const express = require('express');
const router = express.Router();

const ctrlForms = require('../controllers/forms');
const ctrlData = require('../controllers/data');

//forms

//data
router
    .route('/data')
    .get(ctrlData.getWorkouts)

router
    .route('/data/:filter')
    .get(ctrlData.getWorkoutsFiltered)



module.exports = router;