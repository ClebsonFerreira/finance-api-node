'use strict';
module.exports = (sequelize, DataTypes) => {
  const Titulo = sequelize.define('Titulo', {
    name: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN
  }, {});
  Titulo.associate = function(models) {
    // associations can be defined here
  };
  return Titulo;
};