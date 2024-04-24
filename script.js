const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
 
// const oneOfTheLastFilms = prompt('Какой ваш один из последних просмотренных фильмов?', '');
// const valueOfFilm = +prompt('На сколько вы оцените его?', '');
// let answer = [oneOfTheLastFilms, valueOfFilm];




let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        // value: answer[0]
    },
    actors: {},
    genres: [],
    privat: false,

};

const a = prompt('Какой ваш один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько вы оцените его?', ''),
      c = prompt('Какой ваш один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько вы оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

// console.log(answer);
// console.log(personalMovieDB['count'])

console.log(personalMovieDB);