var $ = require('jquery');
var Marionette = require('backbone.marionette');
var template = require('../../templates/login.hbs');

var LoginView = Marionette.ItemView.extend({
  template: template,

  intialize: function() {
    console.log('Initializing Login View');
  },

  events: {
    'click #login-btn': 'login'
  },

  login: function(e) {
    e.preventDefault();
    var url = '/api/authenticate';
    console.log('Logging in...');
    var formValues = {
      email: $('#input-email').val(),
      password: $('#input-password').val()
    };
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: formValues,
      success: function(data) {
        console.log('Login request details: ', data);
        if(data.error) {
          $('.alert-error').text(data.error.text).show();
        } else {
          window.localStorage.setItem('token', data.token);
        }
      }
    });
  }
});

module.exports = LoginView;
