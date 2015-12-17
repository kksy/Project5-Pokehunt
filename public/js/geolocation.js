function initMap() {
	var watchID;
	var map;
	var marker;

 //initialize the map, and place it in the HTML map div
  var mapOptions = {
    zoom: 19,
    center: { lat: -37.8136, lng: 144.9631 },
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    disableDefaultUI: true
	};
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // get API pokemon data
  var options = {
		url: '/api/pokemons',
		type: 'get',
		dataType: 'json'
	};

	// set pokemon markers on map
	var pokemons = []; 
	$.ajax(options).done(function(data) {
		pokemons = data;
		$.each(pokemons, function(index, pokemon) {

			// pokemon markers
			var pokeMarker = new google.maps.Marker({
	      position: {lat: pokemon.lat, lng: pokemon.lng},
	      icon: pokemon.image,
	      optimized: false,
	      map: map
	    });
	    pokeMarker.setMap(map);

	    // marker info window
	    var contentString = '<p>You found a ' + pokemon.name + '!</p><a class="catch-btn waves-effect waves-light btn" data-id="' + pokemon.id + '">catch?</a>';

		  var infowindow = new google.maps.InfoWindow({
		    content: contentString
		  });

		  pokeMarker.addListener('click', function() {
		    infowindow.open(map, pokeMarker);
		    $('.catch-btn').on('click', function() {
				  console.log('catchme');
				  var pokemonId= $(this).data('id');
				  console.log(pokemonId);
				  catchPokemon(pokemonId);
				});
		  });
		});
	});

  function showCurrentLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var coords = new google.maps.LatLng(latitude, longitude);

    // remove previous marker
    if (marker) {
    	marker.setMap(null);
    } 

    // place marker with current location
    marker = new google.maps.Marker({
      position: coords,
      map: map,
      title: "Current location!",
    	icon: 'http://sprites.pokecheck.org/t/187.gif',
    	optimized: false
    });

    map.setCenter(coords);

  }

  $("#posWatcher").click(function() {

  	$(this).removeClass('grey');
  	$(this).addClass('red');

	  // check if navigation is available on the device
		if (navigator.geolocation) {

			// use this when you only want to call geolocation once
	    // navigator.geolocation.getCurrentPosition(showCurrentLocation);

	    // returns the current position and any updates to the position
	    watchId = navigator.geolocation.watchPosition(showCurrentLocation);
	  } else {
	    alert("This game needs location access.");
	  }
	});
}

// Add pokemon to the database
function catchPokemon(pokemonId) {
	var options = {
		url: '/api/userPokemons',
		type: 'post',
		dataType: 'json',

		// change the userId to signed in user when join table works
		data: {userId: 2, pokemonId: parseInt(pokemonId)}
	};

	$.ajax(options).done(function(data) {
		console.log(data);
	});
}

