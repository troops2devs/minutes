var $ = require('jquery');
var Backbone = require('backbone');

var User = Backbone.Model.extend({
  url: '/api/users',

  defaults: {
    name: 'MinutesUser',
    username: 'minutes_username'
  },

  initialize: function(user) {
    var userId = window.localStorage.getItem('userId');
    if (!userId) {
      this.setUser(user);
    }
  },

  setUser: function(user) {
    var self = this;
    var userToken = 'Bearer ' + window.localStorage.getItem('userToken');
    $.ajax({
      url: self.url+'/set',
      headers: {'Authorization': userToken},
      type: 'GET',
      dataType: 'json',
      data: user,
    })
    .done(function(user) {
      self.set('user', user);
      console.log('success');
    })
    .fail(function(res) {
      console.log('error: ', res);
    })
    .always(function() {
      console.log('complete');
    });

  }
});

module.exports = User;
