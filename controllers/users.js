var user = require('../models/user');
var userCollection = require('../controllers/users');

var userController = {
  // GET /users
  getUsers: function(req, res, next) {
    res.status(200).json({});
  },

  // GET /users/:id
  getUser: function(req, res, next) {
    res.status(200).json({});
  },

  // POST /users
  saveUser: function(req, res, next) {
    res.status(201).json({});
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
