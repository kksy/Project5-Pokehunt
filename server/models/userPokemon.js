'use strict';
// module.exports = function(sequelize, DataTypes) {
//   var user_pokemon = sequelize.define('user_pokemon', {
//     userId: DataTypes.INTEGER,
//     pokemonId: DataTypes.INTEGER
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return user_pokemon;
// };

module.exports = function(sequelize, DataTypes) {
  var user_pokemon = sequelize.define('user_pokemon', {
    userId: DataTypes.INTEGER,
    pokemonId: DataTypes.INTEGER
  }, {  
      tableName: 'user_pokemons'
  });
  return user_pokemon;
};