'use strict';
var crypto = require('crypto');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function() {
        // associations can be defined here by passing in models
      }
    }
  });
  return User;
};
