/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]




// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/console.log('***ESERCIZIO A***')

let sum = 10 + 20;
console.log(sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/console.log('***ESERCIZIO B***')

let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/console.log('***ESERCIZIO C***')

let me = {
  name: "Gabriele",
  surname: "Marchione",
  age: 25
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/console.log('***ESERCIZIO D***')

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/ console.log('***ESERCIZIO E***')

me.skills = ["javascript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/ console.log('***ESERCIZIO F***')

me.skills.push("html");
console.log(me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/ console.log('***ESERCIZIO G***')

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/ console.log('***ESERCIZIO 1 ***')

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/ console.log('***ESERCIZIO 2***')

function whoIsBigger(a, b) {
  return a > b ? a : b;
}
console.log(whoIsBigger(5, 10));
console.log(whoIsBigger(20, 15));



/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/ console.log('***ESERCIZIO 3***')

function splitMe(str) {
  return str.split(" ");
}

console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/ console.log('***ESERCIZIO 4***')

function deleteOne(str, isFirst) {
  if (isFirst) {
    return str.substring(1);
  } else {
    return str.substring(0, str.length - 1);
  }
}

console.log(deleteOne("Pippo", true));
console.log(deleteOne("Pippo", false));
console.log(deleteOne("Franco", true));
console.log(deleteOne("Franco", false));


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/ console.log('***ESERCIZIO 5***')

function onlyLetters(str) {
  // Utilizziamo una regex per eliminare tutti i numeri (\d) dalla stringa
  return str.replace(/[0-9]/g, '');
}

console.log(onlyLetters("I have 4 dogs"));  // Output: "I have dogs"

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/ console.log('***ESERCIZIO 6***')

function isThisAnEmail(str) {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validEmail.test(str);
}

console.log(isThisAnEmail("questaè@unemail.it"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/ console.log('***ESERCIZIO 7***')

function whatDayIsIt() {
  const weeksDays = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return weeksDays[dayIndex];
}

console.log(whatDayIsIt());


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/ console.log('***ESERCIZIO 8***')

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollTheDices(roll) {
  let sum = 0;
  let values = [];

  for (let i = 0; i < roll; i++) {
    let result = dice();
    sum += result;
    values.push(result);
  }

  return {
    sum: sum,
    values: values
  };
}

console.log(rollTheDices(2));
console.log(rollTheDices(3));


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/ console.log('***ESERCIZIO 9***')

function howManyDays(date) {

  const currentDate = new Date();
  const inputDate = new Date(date);
  const differenceMs = currentDate - inputDate;
  const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  return differenceDays;
}

const myDate = new Date('2024-06-10');
console.log(howManyDays(myDate) + ' ' + 'giorni');

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/ console.log('***ESERCIZIO 10***')

function isTodayMyBirthday() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const birthdayDay = 28;
  const birthdayMonth = 6;
  return currentDay === birthdayDay && currentMonth === birthdayMonth;
}

console.log(isTodayMyBirthday());



// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/ console.log('***ESERCIZIO 11***')

function deleteProp(obj, propName) {
  const modifiedObj = { ...obj };

  if (propName in modifiedObj) {
    delete modifiedObj[propName];
  }

  return modifiedObj;
}

const person = {
  name: 'Pippo',
  age: 50,
  city: 'Roma'
};

console.log(deleteProp(person, 'age'));
console.log(deleteProp(person, 'city'));


/* ESERCIZIO 12 
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/ console.log('***ESERCIZIO 12***')

function newestMovie(movies) {
  const mostRecent = movies.reduce((acc, current) => (
    acc.Year > current.Year ? acc : current
  ));

  return mostRecent;
}

const mostRecentMovie = newestMovie(movies);
console.log(mostRecentMovie);


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/ console.log('***ESERCIZIO 13***')

function countMovies(movies) {
  return movies.length;
}

const numberOfMovies = countMovies(movies);
console.log(`Numero di film: ${numberOfMovies}`);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/ console.log('***ESERCIZIO 14***')

function onlyTheYears(movies) {
  return movies.map(movie => movie.Year);
}

const yearsArray = onlyTheYears(movies);
console.log(yearsArray);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/ console.log('***ESERCIZIO 15***')

function onlyInLastMillennium(movies) {
  const currentYear = new Date().getFullYear();
  const filteredMovies = movies.filter(movie => {
    const year = parseInt(movie.Year);
    return year >= 1000 && year < 2000;
  });

  return filteredMovies;
}

const moviesLastMillennium = onlyInLastMillennium(movies);
console.log(moviesLastMillennium);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/ console.log('***ESERCIZIO 16***')

function sumAllTheYears(movies) {
  const totalYears = movies.reduce((acc, movie) => acc + parseInt(movie.Year), 0);
  return totalYears;
}

const totalYears = sumAllTheYears(movies);
console.log('La somma degli anni è:', totalYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/ console.log('***ESERCIZIO 17***')


function searchByTitle(keyword) {
  const filteredMovies = movies.filter(movie =>
    movie.Title.toLowerCase().includes(keyword.toLowerCase())
  );
  return filteredMovies;
}

const keyword = 'lord';
const results = searchByTitle(keyword);
console.log(`Film che contengono "${keyword}":`, results);



/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/ console.log('***ESERCIZIO 18***')

function searchAndDivide(keyword2) {
  const dividedMovies = movies.reduce((acc, movie) => {
    if (movie.Title.toLowerCase().includes(keyword2.toLowerCase())) {
      acc.match.push(movie);
    } else {
      acc.unmatch.push(movie);
    }
    return acc;
  }, { match: [], unmatch: [] });

  return dividedMovies;
}

const keyword2 = 'Lord';
const results2 = searchAndDivide(keyword);
console.log(`Film che contengono "${keyword2}" nel titolo:`, results2.match);
console.log(`Film che non contengono "${keyword2}" nel titolo:`, results2.unmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/ console.log('***ESERCIZIO 19***')

function removeIndex(index) {
  return movies.splice(index, 1);
}
removeIndex(3);

console.log(movies)

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/ console.log('***ESERCIZIO 20***')

function selezioniamoIlContainer() {
  const containerElement = document.getElementById("container");
  return containerElement;
}

const container = selezioniamoIlContainer();
console.log(container);

/* ESERCIZIO 21
Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/ console.log('***ESERCIZIO 21***')

function getAllTdElements() {
  const tdElements = document.querySelectorAll("td");
  return tdElements;
}

const allTdElements = getAllTdElements();
console.log(allTdElements);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/ console.log('***ESERCIZIO 22***')

function printTdTexts() {
  const tdElements = document.querySelectorAll("td");
  tdElements.forEach(td => {
    console.log(td.textContent);
  });
}

printTdTexts();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/ console.log('***ESERCIZIO 23***')

function addRedBackgroundToLinks() {
  const linkElements = document.querySelectorAll("a");
  linkElements.forEach(link => {
    link.classList.add('redBackgroundToLinks');
  });
}

addRedBackgroundToLinks();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/ console.log('***ESERCIZIO 24***')

function addNewListItem() {
  const myList = document.getElementById("myList");
  const newListItem = document.createElement("li");
  newListItem.textContent = "New List Item";
  myList.appendChild(newListItem);
}

addNewListItem();


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/ console.log('***ESERCIZIO 25***')

function emptyList() {
  const myList = document.getElementById("myList");
  myList.innerHTML = "";
}

emptyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/ console.log('***ESERCIZIO 26***')

function addClassToTr() {
  const trElements = document.querySelectorAll("tr");

  trElements.forEach(tr => {
    tr.classList.add("test");
  });
}

addClassToTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */


