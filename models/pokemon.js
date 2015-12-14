'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Pokemon;
};