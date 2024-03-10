//scrivere una funzione che prende in ingresso un array e ritorna un nuovo array che è una copia
//di quello ricevuto, senza duplicati

//creo la funzione

//ciclo sull'array e verifico se l'elemento attuale è nell'array result, se non lo è pusho

//Utilizzo indexOf per verificare se l'elemento è già presente
//nell'array result prima di aggiungerlo.

function isContained(array) {
  for (let i = 0; i < array.length; i++) {
    if (result.indexOf(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}
let result = [];
let array = [1, 2, 1, 3, 4, 2, 5, 6, 1, 3, 4, 5, 6];
let nuovoArraySenzaDuplicati = isContained(array);
console.log(nuovoArraySenzaDuplicati);
