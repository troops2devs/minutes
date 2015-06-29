'use strict';
var userModel = require('../models').User;

var userController = {
  // GET /users
  getUsers: function(req, res) {
    userModel.findAll().then(function(users) {
      res.status(200).json(users);
    });
  },

  // GET /users/:id
  getUser: function(req, res) {
    userModel.findById(req.params.id).then(function(user) {
      res.status(200).json(user);
    });
  },

  // POST /users
  saveUser: function(req, res) {
    userModel.create(req.body).then(function(user) {
      res.status(201).json(user);
    });
  },

  // PUT /users/:id
  updateUser: function(req, res) {
    userModel.findById(req.params.id).then(function(user) {
      user.updateAttributes(req.body).then(function(user) {
        res.status(200).json(user);
      });
    });
  },

  // DELETE /users
  deleteUser: function(req, res) {
    userModel.findById(req.params.id).then(function(user) {
      user.destroy().then(function() {
        res.status(200).json();
      });
    });
  }
};

module.exports = userController;
