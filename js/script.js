/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

// 1. Generare un array di N num casuali [1 - 100]
// 2. Prompt per ricevere un numero dall'utente da [1 - 100] (100 - N volte)
// 2.1 Controllo duplicati array utente
// 3. Inserire il prompt in un ciclo:
// se num utente non presente in num casuali pc ok altrimenti fine gioco
// 4. comunicare il punteggio utente stabilito dalla lunghezza dell'array utente creato
// BONUS. differenti modalità di gioco

// BONUS. creo diverse modalità di gioco differenziando il range dei numeri Random
// creati dal pc

alert(
  "Scopo del gioco: inserire più numeri possibile senza trovare quelli generati dal PC"
);

do {
  var mode = prompt(
    "Inserisci la modalità di gioco: 0 FACILE, 1 MEDIO, 2 DIFFICILE"
  );
} while (mode != "0" && mode != "1" && mode != "2");

var numeriMax;

switch (mode) {
  case "0":
    numeriMax = 100;
    break;
  case "1":
    numeriMax = 80;
    break;
  case "2":
    numeriMax = 50;
    break;

  default:
    alert("Errore!");
    break;
}

console.log(`Range numeri da 1 a ${numeriMax}`);

// 1. genero un array di 16 num casuali [1 - 100]

var arrPc = [];
// utilizzo il while poichè nn so per quanti cicli fare l'inserimento poichè
// se il numero già presente non viene inserito e nn aumenta lunghezza dell'array
while (arrPc.length < 16) {
  var numeroPc = numRandom(1, numeriMax);
  if (!checkArr(arrPc, numeroPc)) {
    arrPc.push(numeroPc);
  }
}

/* UTILIZZO LA BUILT IN arr.includes(elemento) */
/* while (arrPc.length < 16) {
  var numeroPc = numRandom(1, numeriMax);
  if (!arrPc.includes(numeroPc)) {
    arrPc.push(numeroPc);
  }
} */

console.log(`Array pc: ${arrPc}`);

// 2. ciclo per ricevere numero dall'utente

var arrayUtente = [];
var punteggio = 0;

// 3. inserisco il prompt in un ciclo - > termina se numeroUtente presente in arrayPc oppure se arrayUtente < 100 - N
do {
  // 2. prompt per ricevere numero dall'utente
  var numeroUtente = prompt(`inserisci un numero [1 - ${numeriMax}]`);

  if (!checkArr(arrayUtente, numeroUtente)) {
    arrayUtente.push(numeroUtente);
    console.log(arrayUtente);
  }
  // 5. incremento il punteggio ogni volta che viene checkato un numero non presente tra i num PC
  if (!checkArr(arrPc, numeroUtente)) {
    punteggio++;
  }

  // 2.1 controllo duplicati array utente ->  uscita ciclo e fine gioco
} while (
  !checkArr(arrPc, numeroUtente) &&
  arrayUtente.length < numeriMax - arrPc.length
);
// 6. log risultato finale punteggio diff punteggio massimo
console.log(
  `Gioco terminato! Punteggio: ${punteggio} Punteggio Massimo ${
    numeriMax - arrPc.length
  }`
);

/* funzioni */

// funzione random
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione check se un N è presente in un array (true = presente)
function checkArr(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      return true;
    }
  }
  return false;
}
