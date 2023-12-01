'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class modulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'usuarioId'
      })

      this.belongsTo(models.tecnico, {
        foreignKey: 'tecnicoId'
      })
      // define association here
    }
  }
  modulo.init({
    usuarioId: DataTypes.INTEGER,
    tecnicoId: DataTypes.INTEGER,
    hora_inicio: DataTypes.TIME,
    duracion: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    tipo: DataTypes.STRING,
    fecha: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'modulo'
  })
  return modulo
}
