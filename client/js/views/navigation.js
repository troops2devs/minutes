var $ = require('jquery');
var Marionette = require('backbone.marionette');
var template = require('../../templates/navigation.hbs');
var Modal = require('../helpers/modal');

var HeaderView = Marionette.ItemView.extend({
  template: template,

  events: {
    'click #login-link': 'showLogin'
  },

  showLogin: function(e) {
    e.preventDefault();
    var modalView = new Modal();
    $('.modal').html(modalView.render().el);
  }
});

module.exports = HeaderView;
