'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('modulos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        }

      },

      hora_inicio: {
        type: Sequelize.TIME
      },
      duracion: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('modulos')
  }
}
