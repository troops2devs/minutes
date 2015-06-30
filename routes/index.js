var express = require('express');
var router = express.Router();
var User = require('../models').User;

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/setup', function(req, res) {
  var user = User.build({
    name: 'tom',
    username: 'tomcat'
  });
  user.password = 'abc123';
  user.save().then(function(user) {
    console.log('User saved successfully');
    res.json(user);
  });
});

module.exports = router;
