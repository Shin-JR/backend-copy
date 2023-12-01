'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('modulos', 'fecha', {
      type: Sequelize.DATEONLY,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    // Si necesitas deshacer este cambio en el futuro
    await queryInterface.changeColumn('modulos', 'fecha', {
      type: Sequelize.DATE,
      allowNull: false
    })
  }
}
