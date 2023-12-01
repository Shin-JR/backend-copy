'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class resena extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.belongsTo(models.usuario, {
        foreignKey: 'usuarioId'
      })

      this.belongsTo(models.tecnico, {
        foreignKey: 'tecnicoId'
      })
    }
  }
  resena.init({
    usuarioId: DataTypes.INTEGER,
    calificacion: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    tecnicoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'resena'
  })
  return resena
}
