// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

// Server PORT
const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Call morgan middleware
app.use(logger('dev'));

// Required Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve public folder
app.use(express.static('public'));

// Connect to mongodb at workout
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// API & HTML Routes
const apiRoutes = (require('./routes/api-route.js'));
const htmlRoutes = (require('./routes/html-route.js'));

app.use(apiRoutes);
app.use(htmlRoutes);

// Listen to PORT 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
