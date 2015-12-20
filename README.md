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
- Made for mobile

![alt text](public/img/howto.JPG?raw=true)


## Wireframes
![alt text](public/img/proj5-wireframes.JPG?raw=true)


## Technologies

+ Node.js with Express.js
+ HTML5
+ CSS3
+ JavaScript, including
	- jQuery
	- AJAX
+ PostgreSQL with Sequelize
+ Google Maps API
+ [MaterializeCSS](http://materializecss.com/)
+ [Generator-Express](https://github.com/petecoop/generator-express)

## Limitations

- Only one user
- Geolocation high accuracy not set up
- Live demo has Pokémon markers set in Melbourne CBD only
- One Pokémon can be caught multiple times i.e. no restriction
- Associations in Sequelize not working

## Remarks and Improvements

This was my first time using Sequelize, and I had difficulties with creating associations. I wasn't able to get it working, so I had to get half of the user_pokemon table in order to access the pokemon table's image column. The code would have been cleaner had the associations worked.

I used Ajax calls as an alternative in accessing server data. Another way to do this is to use `res.render()` in the `/game` route to make the data available on the client-side through a variable. However, due to the asynchronous behaviour of Node, I was only able to get one out of the multiple I needed.

## Installation

This is for people who would like to use my code to make a treasure hunting game using Google Maps API
1. `$ npm install` once github repository is downloaded
2. Get a Google API key and replace the placeholder text in `/views/partials/geolocations.ejs`
3. Install [PostgreSQL](http://www.postgresql.org/download/) and create a database for your app
5. Change the database information in `/server/config.json`
6. `$ node_modules/.bin/sequelize db:migrate` to run the migrations and create tables in your database

