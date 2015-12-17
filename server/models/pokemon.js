'use strict';

module.exports = function(sequelize, DataTypes) {
  var pokemon = sequelize.define('pokemon', {
    name: DataTypes.STRING,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // pokemon.belongsToMany(models.user, {
        //   foreignKey: 'pokemonId',
        //   through: 'user_pokemon',
        //   onDelete: 'cascade'
        // });
      }
    }
  });
  return pokemon;
};