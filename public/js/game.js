$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();

  var options = {
		url: '/api/userPokemons',
		type: 'get',
		dataType: 'json'
	};

	$.ajax(options).done(function(userPokemons) {
		var pokemonIds = [];

		userPokemons.forEach(function(userPokemon) {
			if (userPokemon.userId === 2) {
				pokemonIds.push(userPokemon.pokemonId);
			}
		});
			

			var options2 = {
				url: '/api/pokemons',
				type: 'get',
				dataType: 'json'
			};

			$.ajax(options2).done(function(pokemons) {
				
				var pokeImages = [];
				pokemonIds.forEach(function(pokemonId) {
					pokemons.forEach(function(pokemon) {
						if (pokemon.id === pokemonId) {
							pokeImages.push(pokemon.image);
						}
					});

				});

				$('#num-pokemon').text(pokeImages.length);

				pokeImages.forEach(function(image) {
					var imageTag = '<img src="' + image + '">';
					$('#poke-images').append(imageTag);
				});
				
			});
	});

});