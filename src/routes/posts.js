const express = require('express');

const router = express.Router();

const Post = require('../models/Posts');

router.get('/', (req, res) => {
    res.send("We are on posts!");
});

router.get('/tests', (req, res) => {
    res.send("We are on test!");
});

module.exports = router;