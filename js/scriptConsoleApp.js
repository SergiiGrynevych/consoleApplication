'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const latestSeenFilmsByUserFirst = prompt('Один из последних просмотренных фильмов?', ''),
      markOfFilmFirst = +prompt('На сколько оцените его?', ''),
      latestSeenFilmsByUserSecond = prompt('Один из последних просмотренных фильмов?', ''),
      markOfFilmSecond = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[latestSeenFilmsByUserFirst] = markOfFilmFirst;
personalMovieDB.movies[latestSeenFilmsByUserSecond] = markOfFilmSecond;

console.log(personalMovieDB);