function back(str, ifNan) {
   let stopper = true
   if (ifNan) {
      while (stopper) {
         if (str === null || str.length <= 0 || str.length > 50) {
            str = prompt('Помилка! Уведіть ще раз', '')
         } else stopper = false
      }
   } else {
      while (stopper) {
         if (str === null || str.length > 50 || isNaN(str)) {
            str = prompt('Помилка! Уведіть ще раз', '')
         } else stopper = false
      }
   }
   return str
}

function showMyDB(privat) {
   if (!privat) {
      console.log(personalMovieDB)
   }
   return
}

function writeYourGenres() {
   for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = back(prompt(`Ваш улюблений фільм під номером ${i + 1}`, ''), true)
   }
}

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      let a = back(prompt('Один із останніх переглянутих фільмів?', ''), true)
      let b = back(prompt('Уведіть оцінку', ''), false)
      personalMovieDB.movies[a] = b
   }
   console.log(personalMovieDB.movies)
}

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log('Переглянуто доволі мало фільмів')
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Ви любите смокінги')
   } else if (personalMovieDB.count >= 30) {
      console.log('Та ви, нахуй, кіноман!')
   } else {
      console.log('Відбулась помилка природи')
   }
}

let numberOfFilms = back(prompt('Скільки фільмів ви переглянули?', ''), false)

const personalMovieDB = {
   count: +numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

writeYourGenres()
showMyDB(personalMovieDB.privat)
rememberMyFilms()
detectPersonalLevel()