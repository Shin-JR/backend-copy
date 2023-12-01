'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tecnicos', 'imagen', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }

}
