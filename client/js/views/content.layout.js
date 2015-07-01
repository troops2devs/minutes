var Marionette = require('backbone.marionette');
var template = require('../../templates/content.layout.hbs');
var StudentList = require('./student.list');
var StudentsCollection = require('../collections/students');
var Student = require('../models/student');

var ContentLayout = Marionette.LayoutView.extend({
  template: template,
  id: 'content-layout',

  regions: {
    form: '#new-student-form',
    list: '#student-list'
  },

  onRender: function() {
    var students = new StudentsCollection([
      new Student({name: 'rufus', log: 22}),
      new Student({name: 'omar', log: 82}),
      new Student({name: 'fred', log: 92})
    ]);
    this.list.show(new StudentList({collection: students}));
  }
});

module.exports = ContentLayout;
