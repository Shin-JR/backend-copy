'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('modulos', 'fecha', {
      type: Sequelize.DATE
    })
  }
}
