'use strict';
var passportLocalSequelize = require('passport-local-sequelize');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    salt: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  passportLocalSequelize.attachToUser(User, {
    usernameField: 'username',
    nameField: 'name',
    hashField: 'password_hash',
    saltField: 'salt'
  });
  return User;
};
