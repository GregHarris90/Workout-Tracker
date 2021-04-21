// Dependencies
const mongoose = require('mongoose');

// Call upon Schema class
const Schema = mongoose.Schema;

// Create new Schema for Workout Model
const workoutSchema = new Schema({
    // Define the day property
    day: {
        type: Date,
        default: Date.now
    },
    // Define the exercise property
    exercise: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
});

// Store workoutSchema & name it Workout
const Workout = mongoose.model('Workout', workoutSchema);

// Export Workout Model
module.exports = Workout;