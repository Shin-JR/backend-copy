'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('resenas', {
      fields: ['tecnicoId'],
      type: 'foreign key',
      references: {
        table: 'tecnicos',
        field: 'id'
      },
      name: 'fk_tecnicoId'
    })
  }
}
