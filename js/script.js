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
// 2. Prompt per ricevere un numero dall'utente (100 - N volte)
// 2.1 Controllo duplicati array utente
// 3. Inserire il prompt in un ciclo:
// se num utente non presente in num casuali pc ok altrimenti fine gioco
// 4. comunicare il punteggio utente stabilito dalla lunghezza dell'array utente creato

// 1. genero un array di 16 num casuali [1 - 100]

var arrPc = [];

while (arrPc.length < 16) {
  var numeroPc = numRandom(1, 100);
  if (!checkArr(arrPc, numeroPc)) {
    arrPc.push(numeroPc);
  }
}

console.log(`Array pc:${arrPc}`);

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
