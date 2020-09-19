const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', (req, res) => {
    res.render('partials/register');
});

router.get('/login', (req, res) => {
    res.render('partials/login');
});

module.exports = router;