'use strict';
module.exports = function(sequelize, DataTypes) {
  var pokemon = sequelize.define('pokemon', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        pokemon.belongsTo(models.user);
      }
    }
  });
  return pokemon;
};