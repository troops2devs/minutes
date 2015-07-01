var Marionette = require('backbone.marionette');
var template = require('../../templates/student.list.hbs');
var StudentView = require('./student.js');
var StudentsCollection = require('../collections/students');
var Student = require('../models/student');

var StudentList = Marionette.CompositeView.extend({
  tagName: 'table',
  template: template,
  childView: StudentView,
  childViewContainer: 'tbody',

  initialize: function() {
    var students = new StudentsCollection([
      new Student({name: 'rufus', log: 22}),
      new Student({name: 'omar', log: 82}),
      new Student({name: 'fred', log: 92})
    ]);
    this.collection = students;
  }
});

module.exports = StudentList;
