'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('usuarios', [
      {
        nombre: 'admin',
        correo: 'admin@compups.cl',
        contraseña: '$2a$10$TtABzH5H77F9L8kY8RYC/Ocd1xXqacsUgfTAWYcQlzRoSnJdMlBqS',
        fecha_nacimiento: '1111-11-11T00:00:00.000Z',
        contact: null,
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'user',
        correo: 'user@compups.cl',
        contraseña: '$2a$10$Gxg2D8aw2xiVfZUkUblWhOw1kXyBrS5lvU.Js5GWnTkbr2WrkqFPS',
        fecha_nacimiento: '1111-11-11T00:00:00.000Z',
        contact: null,
        admin: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     *
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
