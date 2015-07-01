var Backbone = require('backbone');
var template = require('../../templates/modal.hbs');

// load backbone.Modal
require('../../bower_components/backbone-modal/backbone.modal.css');
require('../../bower_components/backbone-modal/backbone.modal.theme.css');
require('../../bower_components/backbone-modal/backbone.modal');

var Modal = Backbone.Modal.extend({
  template: template,
  cancelEl: '.bbm-button'
});

module.exports = Modal;
