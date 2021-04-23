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
            res.status(400).json(err);
        });
});

// add (update) exercise "/api/workouts/" PUT (id)

router.put('/api/workouts/:id', (req, res) => {
    Workout.updateOne({ _id: req.params.id })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// create workout "/api/workouts" POST

router.post('/api/workouts', (req, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// get workouts in range "/api/workouts/range" GET

// delete workouts DELETE

// export router

module.export = router;