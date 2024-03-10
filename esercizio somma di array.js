//Scrivi una funzione chiamata sommaArray che accetti
//un array di numeri come parametro e restituisca la somma di tutti gli elementi.

function sommaArray(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i];
  }
  return somma;
}
let Arraydinumeri = [1, 2, 3, 4, 5];
let risultato = sommaArray(Arraydinumeri);
console.log(risultato);
