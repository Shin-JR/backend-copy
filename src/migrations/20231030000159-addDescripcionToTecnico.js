'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tecnicos', 'descripcion', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }

}
