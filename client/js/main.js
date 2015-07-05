var $ = require('jquery');
var Backbone = require('backbone');
var Minutes = require('./app');
Backbone.$ = $;

//load css via webpack
require('../styles/styles.less');


var lock = null;
$(document).ready(function() {

  var showContent = function(profile) {
    $('.home-container').hide();
    $('#content-region').show();
    $('.login-btn').hide();
    $('.logout-btn').show();
    Minutes.start({user: profile});
  };

  if (localStorage.getItem('userToken')) {
    showContent();
  }

  lock = new Auth0Lock('yaF3AyJUIRoGeKvf3pSNwkctFK42c4NA', 'minutes.eu.auth0.com');

  $('.login-btn').click(function(e) {
    e.preventDefault();
    lock.show(function(err, profile, token) {
      if (err) {
        alert('There was an error');
      } else {
        // Save the JWT token.
        localStorage.setItem('userToken', token);

        showContent(profile);
      }
    });
  });

  $('.logout-btn').click(function(e) {
    e.preventDefault();
    localStorage.removeItem('userToken');
    window.location.href = "/";
    userProfile = null;
    $('.login-btn').show();
    $('.logout-btn').hide();
  });
});
