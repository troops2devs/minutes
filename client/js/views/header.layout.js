var Marionette = require('backbone.marionette');
var template = require('../../templates/header.layout.hbs');
var Navigation = require('./navigation');

var HeaderLayout = Marionette.LayoutView.extend({
  template: template,
  id: 'header-layout',

  regions: {
    nav: '#navigation-region'
  },

  onRender: function() {
    this.nav.show(new Navigation());
  }
});

module.exports = HeaderLayout;
