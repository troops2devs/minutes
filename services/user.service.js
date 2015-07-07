'use strict';

var userModel = require('../models').User;

var userService = {
  getUsers: function(cb) {
    userModel.findAll().then(function(users) {
      cb(users);
    });
  },

  getUser: function(id, cb) {
    userModel.findById(id).then(function(user) {
      cb(user);
    });
  }
};

module.exports = userService;
