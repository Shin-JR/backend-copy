'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tecnicos', [
      {
        nombre: 'Javier',
        calificacion: 5,
        correo: 'javier@compups.cl',
        descripcion: 'good boy',
        imagen: 'https://images.dog.ceo/breeds/terrier-russell/little1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Monty',
        calificacion: 4,
        correo: 'monty@compups.cl',
        descripcion: 'Apasionado por la naturaleza',
        imagen: 'https://images.dog.ceo/breeds/mountain-swiss/n02107574_678.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Braco',
        calificacion: 4,
        correo: 'braco@compups.cl',
        descripcion: 'Bueno para la mocha',
        imagen: 'https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_7467.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Siberio',
        calificacion: 5,
        correo: 'siberio@compups.cl',
        descripcion: 'Especializado en arreglar computadores a bajas temperaturas',
        imagen: 'https://images.dog.ceo/breeds/malamute/n02110063_1581.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Alan',
        calificacion: 4,
        correo: 'alan@compups.cl',
        descripcion: 'El que tiene las mejores habilidades blandas',
        imagen: 'https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20200101_000620.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tecnicos', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
