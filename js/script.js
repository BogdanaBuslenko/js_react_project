'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ''),
          b = prompt("На сколько оцените его?", '');
          
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

// for (let i = 0; i < 2; ) {
//     let a = prompt("Один из последних просмотренных фильмов?", '');
//     if (a === '' || a === null || a.length > 50) {
//         continue;
//     }
//     let b = prompt("На сколько оцените его?", '');
//     if (b === '' || b === null || b.length > 50) {
//         continue;
//     }
//     personalMovieDB.movies[a] = b;
//     i++;
// }

// let i = 0;

// // while (i < 2) {
// //     let a = prompt("Один из последних просмотренных фильмов?", '');
// //     if (a === '' || a === null || a.length > 50) {
// //         continue;
// //     }
// //     let b = prompt("На сколько оцените его?", '');
// //     if (b === '' || b === null || b.length > 50) {
// //         continue;
// //     }
// //     personalMovieDB.movies[a] = b;
// //     i++;
// // }

// do {
//     let a = prompt("Один из последних просмотренных фильмов?", '');
//     if (a === '' || a === null || a.length > 50) {
//         continue;
//     }
//     let b = prompt("На сколько оцените его?", '');
//     if (b === '' || b === null || b.length > 50) {
//         continue;
//     }
//     personalMovieDB.movies[a] = b;
//     i++;
// } while (i < 2);



if (personalMovieDB.count  < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}



