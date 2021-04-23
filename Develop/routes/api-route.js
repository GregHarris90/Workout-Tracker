// Dependencies
// const router = require('express').Router();
// const Workout = require('../models/Workout.js');
const db = require('../models');

// API Routes
// get last workout "/api/workouts" GET

module.exports = function (app) {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    // add (update) exercise "/api/workouts/" PUT (id)

    app.put('/api/workouts/:id', ({ body }, res) => {
        db.Workout.updateOne({ _id: req.params.id })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    // create workout "/api/workouts" POST

    app.post('/api/workouts', ({ body }, res) => {
        db.Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    // get workouts in range "/api/workouts/range" GET

    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
            .sort({ 'day': -1 })
            .limit(10)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    })
    // delete workouts DELETE


};
// export router

// module.export = router;