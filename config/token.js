'use strict';
var jwt = require('jsonwebtoken');
var User = require('../models').User;
var secret = require('./config').secret;

module.exports = function(req, res) {
  User.findOne({
    where: {
      username: req.body.username,
    }
  }).then(function(user) {
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.authenticate(req.body.password)) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
        var token = jwt.sign(user, secret, {
          expiresInMinutes: 1440 // expires in 24 hours
        });
        res.json({
          success: true,
          message: 'Enjoy your token',
          token: token
        });
      }
    }
  });
};
