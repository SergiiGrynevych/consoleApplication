'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i += 1){
    
    const latestSeenFilmsByUser = prompt('Один из последних просмотренных фильмов?', ''),
          markOfFilm = +prompt('На сколько оцените его?', '');
        
    if (latestSeenFilmsByUser != null && markOfFilm != null && latestSeenFilmsByUser != '' && markOfFilm != '' && latestSeenFilmsByUser.length < 50) {
            personalMovieDB.movies[latestSeenFilmsByUser] = markOfFilm;
    } else {
        i--;
    }

}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);