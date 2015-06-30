'use strict';
var crypto = require('crypto');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    getterMethods: {
      password: function() {
        return this.password_hash;
      }
    },
    setterMethods: {
      password: function(password) {
        this.salt = this.makeSalt();
        this.password_hash = this.encryptPassword(password, this.salt);
      }
    },
    classMethods: {
      associate: function() {
        // associations can be defined here by passing in models
      }
    },
    instanceMethods: {
      authenticate: function(plainText) {
        return this.encryptPassword(plainText, this.salt) === this.password_hash;
      },
      makeSalt: function() {
        return crypto.randomBytes(16).toString('base64');
      },
      encryptPassword: function(password, salt) {
        if (!password || !salt) {
          return '';
        }
        var newSalt = new Buffer(salt, 'base64');
        return crypto.pbkdf2Sync(password, newSalt, 10000, 64).toString('base64');
      }
    }
  });
  return User;
};
