'use strict';
var studentModel = require('../models').Student;

var studentsController = {
  // GET /students
  getStudents: function(req, res) {
    studentModel.findAll().then(function(students) {
      res.status(200).json(students);
    });
  },

  // GET /students/:id
  getStudent: function(req, res) {
    studentModel.findById(req.params.id).then(function(student) {
      res.status(200).json(student);
    });
  },

  // POST /students
  saveStudent: function(req, res) {
    studentModel.create(req.body).then(function(student) {
      res.status(201).json(student);
    });
  },

  // PUT /students/:id
  updateStudent: function(req, res) {
    studentModel.findById(req.params.id).then(function(student) {
      student.updateAttributes(req.body).then(function(student) {
        res.status(200).json(student);
      });
    });
  },

  // DELETE /students
  deleteStudent: function(req, res) {
    studentModel.findById(req.params.id).then(function(student) {
      student.destroy().then(function() {
        res.status(200).json();
      });
    });
  }
};

module.exports = studentsController;
