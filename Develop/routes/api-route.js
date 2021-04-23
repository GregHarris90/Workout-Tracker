// Dependencies
const router = require('express').Router();
const Workout = require('../models/Workout.js');

// API Routes
// get last workout "/api/workouts" GET

router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// add exercise "/api/workouts/" PUT (id)

// create workout "/api/workouts" POST

// get workouts in range "/api/workouts/range" GET

// delete workouts DELETE

// export