var $ = require('jquery');
var Backbone = require('backbone');
var Minutes = require('./app');
Backbone.$ = $;

//load css via webpack
require('../styles/styles.less');

Minutes.start();
