'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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

// first cycle of second task
function rememberMyFilms() {
    for (let i = 0; i < 2; i += 1){
        
        const latestSeenFilmsByUser = prompt('Один из последних просмотренных фильмов?', ''),
            markOfFilm = +prompt('На сколько оцените его?', '');

        if (latestSeenFilmsByUser != null && markOfFilm != null && latestSeenFilmsByUser != '' && markOfFilm != '' && latestSeenFilmsByUser.length < 50) {
                personalMovieDB.movies[latestSeenFilmsByUser] = markOfFilm;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

// second cycle of second task
// let i = 0;

// do {
//     const latestSeenFilmsByUser = prompt('Один из последних просмотренных фильмов?', ''),
//           markOfFilm = +prompt('На сколько оцените его?', '');

//     if (latestSeenFilmsByUser != null && markOfFilm != null && latestSeenFilmsByUser != '' && markOfFilm != '' && latestSeenFilmsByUser.length < 50) {
//             personalMovieDB.movies[latestSeenFilmsByUser] = markOfFilm;
//     } else {
//         i--;
//     }
// } while (i++ < 1);   

// third cycle second of task
// let i = 0;
// while (i++ < 2) {
//     const latestSeenFilmsByUser = prompt('Один из последних просмотренных фильмов?', ''),
//           markOfFilm = +prompt('На сколько оцените его?', '');

//     if (latestSeenFilmsByUser != null && markOfFilm != null && latestSeenFilmsByUser != '' && markOfFilm != '' && latestSeenFilmsByUser.length < 50) {
//             personalMovieDB.movies[latestSeenFilmsByUser] = markOfFilm;
//     } else {
//         i--;
//     }
// }

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

// FIRST POSSIBLE VARIANT // but no 
// function writeYourGenres(genresOfFilms) {
//     for (let i = 1; i <= 3; i += 1){
//         genresOfFilms[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres(personalMovieDB.genres);

// SECOND POSSIBLE VARIANT
function writeYourGenres() {
    for (let i = 1; i <= 3; i += 1){
        const yourGenres = prompt(`Ваш любимый жанр под номером ${i}`);

    if (yourGenres != null && yourGenres != '') {
        personalMovieDB.genres.push(yourGenres);
        } else {
            i--;
        }
    }
}
writeYourGenres();

console.log(personalMovieDB);
