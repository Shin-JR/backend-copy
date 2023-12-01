'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('modulos', {
      fields: ['tecnicoId'],
      type: 'foreign key',
      references: {
        table: 'tecnicos',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      name: 'fk_tecnicoId'
    })
  }
}
