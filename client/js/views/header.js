var $ = require('jquery');
var _ = require('underscore');
var Marionette = require('backbone.marionette');
var template = require('../../templates/header.hbs');

var HeaderView = Marionette.ItemView.extend({
  template: template,
});

module.exports = HeaderView;
