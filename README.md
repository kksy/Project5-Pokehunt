# PokéHunt

## Overview

PokéHunt is a game based on the Pokémon series. It features Google Maps API and the use of geolocation to simulate player adventure to catch Pokémon surrounding the map.

This app is not only limited to Pokémon, but the code can also be used in other forms such as treasure-hunting-type games.

This project was made during the final 5-day project week (14/12/2015 - 18/12/2015) as a Web Development Immersive student at General Assembly.

<b>Live Demo:</b> http://pokehunt.herokuapp.com/
+ username: user1
+ password: password123

## Disclaimer

No copyright infringement intended. Pokémon is owned by The Pokémon Company, which I am not affiliated to. 

## Features

- Geolocation with automatic position update
- Ability to click on Pokémon Markers
- Ability to save Pokémon in a modal pop-up collection
- Made for mobile
- [UPDATE 16/01/2016] User login and signup

![alt text](public/img/howto.JPG?raw=true)

## Technologies

+ Node.js with Express.js
+ HTML5
+ CSS3
+ JavaScript, including
	- jQuery
	- AJAX
+ PostgreSQL with Sequelize
+ Google Maps API
+ Passport.js
+ [passport-local](https://github.com/jaredhanson/passport-local)
+ [MaterializeCSS](http://materializecss.com/)
+ [Generator-Express](https://github.com/petecoop/generator-express)
+ Task Runner: Gulp
+ [Dotenv](https://www.npmjs.com/package/dotenv) to generate environment variables

## Design Process

#### Wireframes
![alt text](public/img/proj5-wireframes.JPG?raw=true)

#### Database
![alt text](public/img/proj5-database.JPG?raw=true)

## Limitations

- [FIXED ON 16/01/2016] Only one user
- Geolocation high accuracy not set up
- Live demo has Pokémon markers set in Melbourne CBD only
- One Pokémon can be caught multiple times i.e. no restriction
- Associations in Sequelize not working

## Remarks and Improvements
+ The minimum viable product for this project was to use Google Maps API to help in creating a real-time treasure hunting game. As my goal for this project was to practice more Node.js and incorporate a database with it, I only planned to have clickable markers once a player reaches a certain area. These markers can then be saved in an inventory. Future improvements include fixing limitiations.

+ This was my first time using Sequelize, and I had difficulties with creating associations. I wasn't able to get it working, so I had to get half of the user_pokemon table in order to access the pokemon table's image column. The code would have been cleaner had the associations worked.

+ I used Ajax calls as an alternative in accessing server data. Another way to do this is to use `res.render()` in the `/game` route to make the data available on the client-side through a variable. However, due to the asynchronous behaviour of Node, I was only able to get one out of the multiple I needed.

## Installation

This is for people who would like to use my code to make a treasure hunting game using Google Maps API:

1. `$ npm install` once github repository is downloaded
2. Get a Google API key and replace the placeholder text in `/views/partials/geolocations.ejs` or create a `.env` file in the root of your project folder. This works as `/routes/game.js` renders a variable `API_KEY: process.env.GOOGLE_API_KEY`.
3. Install [PostgreSQL](http://www.postgresql.org/download/) and create a database for your app
5. Change the database information in `/server/config.json`
6. `$ node_modules/.bin/sequelize db:migrate` to run the migrations and create tables in your database

