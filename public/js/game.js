// $(document).ready(function(){
	var currentUserId = $('.stats').data('id');

  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();

  var options = {
		url: '/api/userPokemons',
		type: 'get',
		dataType: 'json'
	};

	$.ajax(options).done(function(userPokemons) {
		var pokemonIds = [];

		// Get pokemonId from user_pokemon table, where userId is the current user
		userPokemons.forEach(function(userPokemon) {
			// userId = 2 is a placeholder, until logging in is available
			if (userPokemon.userId === currentUserId) {
				pokemonIds.push(userPokemon.pokemonId);
			}
		});
			
			var options2 = {
				url: '/api/pokemons',
				type: 'get',
				dataType: 'json'
			};


			$.ajax(options2).done(function(pokemons) {
				// Display image and count of pokemon that were caught	
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

// });