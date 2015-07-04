'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'user_id',
      {
        type: Sequelize.STRING(1234),
        allowNull: false
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('Users', 'user_id');
  }
};
