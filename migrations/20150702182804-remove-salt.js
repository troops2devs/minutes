'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'salt');
  },

  down: function (queryInterface, Sequelize) {
  }
};
