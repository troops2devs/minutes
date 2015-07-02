var $ = require('jquery');
var Backbone = require('backbone');
var Minutes = require('./app');
Backbone.$ = $;

//load css via webpack
require('../styles/styles.less');


Minutes.start();
var lock = null;
$(document).ready(function() {
   lock = new Auth0Lock('yaF3AyJUIRoGeKvf3pSNwkctFK42c4NA', 'minutes.eu.auth0.com');
   var userProfile;

  $('.login-btn').click(function(e) {
    e.preventDefault();
    lock.show(function(err, profile, token) {
      if (err) {
        alert('There was an error');
      } else {
        // Save the JWT token.
        localStorage.setItem('userToken', token);

        // Save the profile
        userProfile = profile;
        $('#content-region').show();
        $('.login-btn').hide();
        $('.logout-btn').show();
      }
    });
  });

  $('.logout-btn').click(function(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    userProfile = null;
    $('.logout-btn').show();
    window.location.href = "/";
  });
});
