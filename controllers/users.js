'use strict';
var userModel = require('../models').User;

var userController = {
  // GET /users
  getUsers: function(req, res, next) {
    res.status(200).json({});
  },

  // GET /users/:id
  getUser: function(req, res, next) {
    userModel.findById(req.params.id).then(function(user) {
      res.status(200).json(user);
    });
  },

  // POST /users
  saveUser: function(req, res, next) {
    userModel.create(req.body).then(function(user) {
      res.status(201).json(user);
    });
  },

  // PUT /users/:id
  updateUser: function(req, res, next) {
    res.status(200).json({});
  },

  // DELETE /users
  deleteUser: function(req, res, next) {
    res.status(200).json({});
  }
};

module.exports = userController;
