// Dependencies
const router = require('express').Router();
const path = require('path');

// Serve up stats.html 
router.get('/stats', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// Serve up exercise.html
router.get('/exercise', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

module.exports = router;
