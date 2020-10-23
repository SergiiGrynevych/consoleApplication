'use strict';

const personalMovieDB = {
    count: 0, // numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i += 1) {
        
            const latestSeenFilmsByUser = prompt('Один из последних просмотренных фильмов?', ''),
                markOfFilm = +prompt('На сколько оцените его?', '');

            if (latestSeenFilmsByUser != null && markOfFilm != null && latestSeenFilmsByUser != '' && markOfFilm != '' && latestSeenFilmsByUser.length < 50 && !isNaN(markOfFilm)) {
                personalMovieDB.movies[latestSeenFilmsByUser] = markOfFilm;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            alert("Вы классический зритель");
        } else if (this.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function () {
        let i = 0;
        for (i = 1; i <= 3; i += 1) {
            const yourGenres = prompt(`Ваш любимый жанр под номером ${i}`);

            if (yourGenres != null && yourGenres != '') {
                personalMovieDB.genres.push(yourGenres.toLowerCase());
            } else {
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, index) => console.log(`Любимый жанр ${index + 1} - это ${item}`));
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);

