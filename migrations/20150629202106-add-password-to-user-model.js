'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'password_hash',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('Users', 'password_hash');
  }
};
