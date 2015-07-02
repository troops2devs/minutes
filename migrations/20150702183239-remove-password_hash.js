'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'password_hash');  
  },

  down: function (queryInterface, Sequelize) {
  }
};
