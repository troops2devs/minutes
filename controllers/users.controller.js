'use strict';
var userModel = require('../models').User;
var userService = require('../services/user.service');

var userController = {
  // GET /users
  getUsers: function(req, res) {
    userService.getUsers(function(users) {
      res.status(200);
      res.json(users);
    });
  },

  // GET /users/set
  // sets user upon initial login
  setUser: function(req, res, next) {
    userModel.findOrCreate({
      where: {user_id: req.query.user_id},
      defaults: {
        username: req.query.nickname,
        name: req.query.name,
        user_id: req.query.user_id
      }
    }).then(function(user) {
      res.status(200);
      req.user = user;
      next();
    });
  },

  // GET /users/:id
  getUser: function(req, res) {
    userService.getUser(req.params.id, function(user) {
      res.status(200);
      res.json(user);
    });
  },

  // POST /users
  saveUser: function(req, res) {
    userService.saveUser(req.body, function(user) {
      res.status(201);
      res.json(user);
    });
  },

  // PUT /users/:id
  updateUser: function(req, res) {
    req.body.id = req.params.id;
    userService.updateUser(req.body, function(user) {
      res.status(200);
      res.json(user);
    });
  },

  // DELETE /users
  deleteUser: function(req, res) {
    userService.deleteUser(req.params.id, function() {
      res.status(200);
      res.json();
    });
  }
};

module.exports = userController;
