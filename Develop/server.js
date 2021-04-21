// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Server PORT
const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Required Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// call morgan middleware???
app.use(morgan('dev'));

// Serve public folder
app.use(express.static('public'));

// Connect to mongodb at workout
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Routes
app.use(require());

// Listen to PORT 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
