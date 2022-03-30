var express = require('express');
var router = express.Router();
const upload = require('../middleware/multer');
const fs = require('fs');
const path = require('path');


/* get register page */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'User | Register Page' });
});

/* get login page */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'User | Login Page' });
});

/* get login page */
router.get('/', function(req, res, next) {
  res.send(`<h1>Welcome to Homepage</h1><a href="/register">Redirect to register</a>`)
});

/* get profile page */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'User | Profile Page' });
});



module.exports = router;