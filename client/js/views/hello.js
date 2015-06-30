var $ = require('jquery');
var _ = require('underscore');
var Marionette = require('backbone.marionette');
var template = require('../../templates/main.hbs');

var HelloView = Marionette.ItemView.extend({
  template: template,
});

module.exports = HelloView;
