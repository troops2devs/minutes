var express = require('express');
var router = express.Router();
var User = require('../models').User;

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/setup', function(req, res) {
  User.create({
    name: 'tom',
    username: 'tomcat',
    password: 'abc123'
  }).then(function(user) {
    console.log('User saved successfully');
    res.json(user);
  });
});

module.exports = router;
