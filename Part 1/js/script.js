"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many movies have you watched?", "");
        
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies have you watched?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
            console.log("Watched not many movies");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("You are clasical movie watcher!");
        } else if (personalMovieDB.count > 30){
            console.log("You love movies!");
        } else {
            console.log("Error! Try again.");
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Your favorite genre for ${i+1} movie?`);

            if (genre === "" || genre == null) {
                console.log("Invalid Information");
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i+1} is ${item}\n`);
        });
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    }
};
