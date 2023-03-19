function back(str) {
   let stopper = true
   while (stopper) {
      if (str === null || str.length <= 0 || str.length > 50) {
         str = prompt('Помилка! Уведіть ще раз', '')
      } else stopper = false
   }
   return str
}

let numberOfFilms = back(prompt('Скільки фільмів ви переглянули?', ''))

const personalMovieDB = {
   count: +numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

for (let i = 0; i < 2; i++) {
   let a = back(prompt('Один із останніх переглянутих фільмів?', ''))
   let b = back(prompt('Уведіть оцінку', ''))
   personalMovieDB.movies[a] = b
}
console.log(personalMovieDB.movies)

if (personalMovieDB.count < 10) {
   console.log('Переглянуто доволі мало фільмів')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log('Ви любите смокінги')
} else if (personalMovieDB.count >= 30) {
   console.log('Та ви, нахуй, кіноман!')
} else {
   console.log('Відбулась помилка природи')
}
