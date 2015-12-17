'use strict';

module.exports = function(sequelize, DataTypes) {
  var user_pokemon = sequelize.define('user_pokemon', {
    userId: DataTypes.INTEGER,
    pokemonId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  return user_pokemon;
};