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
  },

  saveUser: function(userAttrs, cb) {
    userModel.create(userAttrs).then(function(user) {
      cb(user);
    });
  },

  updateUser: function(userAttrs, cb) {
    userModel.findById(userAttrs.id).then(function(user) {
      user.updateAttributes(userAttrs).then(function(user) {
        cb(user);
      });
    });
  },

  deleteUser: function(id, cb) {
    userModel.findById(id).then(function(user) {
      user.destroy().then(function(user) {
        cb(user);
      });
    });
  }
};

module.exports = userService;
