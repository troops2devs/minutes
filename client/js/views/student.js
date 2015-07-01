var $ = require('jquery');
var _ = require('underscore');
var Marionette = require('backbone.marionette');
var template = require('../../templates/student.hbs');
var Student = require('../models/student');

var StudentView = Marionette.ItemView.extend({
  model: Student,
  tagName: 'tr',
  id: 'student',
  template: function(model) {
    return require('../../templates/student.hbs')(model);
  },
});

module.exports = StudentView;
