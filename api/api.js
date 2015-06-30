'use strict';

var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');
var auth = require('../config/middlewares/auth');
var token = require('../config/token.js');

// Generate token
router.post('/authenticate', token);

// auth middleware
router.use(auth);

router.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// User routes
router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUser);
router.post('/users', usersController.saveUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;
