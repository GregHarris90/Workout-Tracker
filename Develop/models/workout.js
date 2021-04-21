const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//build schema
const workoutSchema = new Schema({
    day: {},
    exercise: []

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;