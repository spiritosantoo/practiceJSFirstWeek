const numberOfFilms = +prompt('Скільки фільмів ви переглянули?', 'Уведіть кількість')

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

const a = prompt('Один із останніх переглянутих фільмів?', 'Уведіть назву фільму'),
      b = prompt('На скільки оціните його?', 'Уведіть свою оцінку'),
      c = prompt('Один із останніх переглянутих фільмів?', 'Уведіть назву фільму'),
      d = prompt('На скільки оціните його?', 'Уведіть свою оцінку')

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d
