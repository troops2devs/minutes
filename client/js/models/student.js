var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Student = Backbone.Model.extend({
  defaults: {
    name: 'Barney',
    username: 'barn',
    timeReq: 90,
    logged: 0
  }
});

module.exports = Student;
