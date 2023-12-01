'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.hasMany(models.modulo, {
        foreignKey: 'id'
      })

      this.hasMany(models.resena, {
        foreignKey: 'id'
      })
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    contact: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'usuario'
  })
  return usuario
}
