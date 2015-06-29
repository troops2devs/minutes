'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'salt',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('Users', 'salt');
  }
};
