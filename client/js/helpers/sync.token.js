var Backbone = require('backbone');
// Store "old" sync function
var backboneSync = Backbone.sync;

// Now override
Backbone.sync = function (method, model, options) {

  /*
   * "options" represents the options passed to the underlying $.ajax call
   */
  var token = window.localStorage.getItem('userToken');

  if (token) {
    var auth = 'Bearer ' + localStorage.getItem('userToken');
    options.headers = {
      'Authorization': auth;
    };
  }

  // call the original function
  backboneSync(method, model, options);
};
