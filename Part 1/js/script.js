"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies have you watched?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you watched?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Last wacthed movie?", ""),
        b = prompt("Grade it", "");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log("Success");
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
        console.log("Watched not many movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("You are clasical movie watcher!");
    } else if (personalMovieDB.count > 30){
        console.log("You love movies!");
    } else {
        console.log("Error! Try again.");
    }
}

detectPersonalLevel();

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Your favorite genre for ${i+1} movie?`);
    }
}

writeYourGenres();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();
