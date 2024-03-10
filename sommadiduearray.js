/*Scrivi una funzione chiamata sommaArray che accetti due array di numeri 
come parametri e restituisca un nuovo array contenente la somma degli elementi
 corrispondenti dei due array. Assicurati che gli array abbiano la stessa lunghezza.*/

function sommaArray(array1, array2) {
  let risultato = [];
  let somma = 0;
  if (array1.length !== array2.length) {
    console.log("array di lunghezza diversa");
  }

  for (let i = 0; i < array1.length; i++) {
    risultato.push(array1[i] + array2[i]);
  }
  return risultato;
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [7, 8, 9, 1, 2, 5];
let risultato = sommaArray(array1, array2);
console.log(risultato);
