# PokéHunt

## Overview

PokéHunt is a game based on the Pokémon series. It features Google Maps API and the use of geolocation to simulate player adventure to catch Pokémon surrounding the map.

This project was made during the final 5-day project week as a Web Development Immersive student at General Assembly.

<b>Live Demo:</b> http://pokehunt.herokuapp.com/

## Disclaimer

No copyright infringement intended. Pokémon is owned by The Pokémon Company, which I am not affiliated to. 

## Features

- Geolocation with automatic position update
- Ability to click on Pokémon Markers
- Ability to save Pokémon in a modal pop-up collection

## Wireframes
![alt text](public/img/proj5-wireframes.PNG)


## Technologies

1. Node.js
2. HTML5
3. CSS3
4. JavaScript, including
	- jQuery
	- AJAX
5. PostgreSQL with Sequelize
6. Express.js
7. Google Maps API
8. [MaterializeCSS](http://materializecss.com/)
9. [Generator-Express](https://github.com/petecoop/generator-express)

## Limitations

- Only one user
- Geolocation high accuracy not set up
- Live demo has Pokémon markers set in Melbourne CBD only
- One Pokémon can be caught multiple times i.e. no restriction
- Associations in Sequelize not working

## Installation
1. `$ npm install` once github repository is downloaded
2. Get a Google API key and replace the placeholder text in `/views/partials/geolocations.ejs`
3. Install [PostgreSQL](http://www.postgresql.org/download/) and create a database for your app
5. Change the database information in `/server/config.json`
6. `$ node_modules/.bin/sequelize db:migrate` to run the migrations and create tables in your database

