'use strict';

var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');
var studentsController = require('../controllers/students');

router.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// User routes
router.get('/users', usersController.getUsers);
router.get('/users/set', usersController.setUser);
router.get('/users/:id', usersController.getUser);
router.post('/users', usersController.saveUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

// Student routes
router.get('/students', studentsController.getStudents);
router.get('/students/:id', studentsController.getStudent);
router.post('/students', studentsController.saveStudent);
router.put('/students/:id', studentsController.updateStudent);
router.delete('/students/:id', studentsController.deleteStudent);

module.exports = router;
