'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('resenas', {
      fields: ['usuarioId'],
      type: 'foreign key',
      references: {
        table: 'usuarios',
        field: 'id'
      },
      name: 'fk_usuarioId'
    })
  }
}
