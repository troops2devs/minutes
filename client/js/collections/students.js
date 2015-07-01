var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Student = require('../models/student');

var Students = Backbone.Collection.extend({
  model: Student
});

module.exports = Students;
