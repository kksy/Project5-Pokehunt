// test associations (currently doesn't work)

var Sequelize = require('sequelize');
var sequelize = new Sequelize('pokehunt_development', 'ksy', 'null', {
  host: "/var/run/postgresql",
  dialect: 'postgres'
});


var user = sequelize.define('user', {
  email: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
      // user.belongsToMany(models.pokemon, {
      //     foreignKey: 'userId',
      //     through: 'user_pokemon'
      // });
    }
  }
});

var pokemon = sequelize.define('pokemon', {
  name: Sequelize.STRING,
  question: Sequelize.STRING,
  answer: Sequelize.STRING,
  lat: Sequelize.FLOAT,
  lng: Sequelize.FLOAT,
  image: Sequelize.STRING
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

var user_pokemon = sequelize.define('user_pokemon', {
    userId: Sequelize.INTEGER,
    pokemonId: Sequelize.INTEGER
}, {  
    tableName: 'user_pokemons'
});

// user_pokemon.findAll({
// 	// find userId in the user_pokemon join table
// 	where: { userId: 1} 
// }).then(function(data) {
// 	data.forEach(function (data1) {
// 		var pokemonId = data1.dataValues.pokemonId;
		
// 		// find pokemon data
// 		pokemon.find({
// 			where: { id: pokemonId }

// 		}).then(function(data2) {
// 			// extract image from data
// 			var results = data2.dataValues.image;
// 		});
// 	});
	
// });

user_pokemon.findAll({
	// find userId in the user_pokemon join table
	where: { userId: 1} 
}).then(function(data) {
	// console.log(data[0].dataValues.pokemonId);
	data.forEach(function (data1) {
		var pokemonId = data1.dataValues.pokemonId;
		// console.log(pokemonId);
	// 	// find pokemon data
		pokemon.find({
			where: { id: pokemonId }

		}).then(function(data2) {
			hello.push(String(data2.dataValues.image));
		});
	});
});


// pokemon.find({ 
// 		where: { id: 1 }
// }).then( function(pokemon) {
// 	console.log(pokemon.dataValues);
// });