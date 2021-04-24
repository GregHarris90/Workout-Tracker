// Dependencies
const router = require('express').Router();
const Workout = require('../models/Workout.js');

// API Routes

// get last workout "/api/workouts" GET
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// add (update) exercise by (id) "/api/workouts/" PUT
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate( req.params.id , { $push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// create workout "/api/workouts" POST
router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// get workouts in range "/api/workouts/range" GET
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .sort({ 'day': -1 })
        .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// delete workout by (id) "/api/workouts/range" DELETE
router.delete('/api/workouts/:id', ({ body }, res) => {
    Workout.findByIdAndDelete(body._id)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// export router
module.exports = router;