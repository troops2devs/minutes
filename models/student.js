'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    timeReq: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function() {
      }
    }
  });
  return Student;
};
