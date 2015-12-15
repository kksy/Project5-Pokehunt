'use strict';
module.exports = function(sequelize, DataTypes) {
  var userPokemons = sequelize.define('userPokemons', {
    userId: DataTypes.INTEGER,
    pokemonId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.user.belongsToMany(models.pokemon, { through: userPokemons });
        models.pokemon.belongsToMany(models.user, { through: userPokemons });
      }
    }
  });
  return userPokemons;
};