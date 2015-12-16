'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        user.belongsToMany(models.pokemon, {
            foreignKey: 'userId',
            through: 'user_pokemon'
        });
      }
    }
  });
  return user;
};