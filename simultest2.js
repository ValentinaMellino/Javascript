//Scrivere una funzione missingnumbers che prende in ingresso un array ordinato arr, la funzione deve ritornare
//la somma di tutti i numeri che mancano tra i numeri

//es per missingNumbers([1, 2, 4, 6, 9]) ritorna 22 (3 + 5 + 7 + 8)

//creo una variabile somma
//ciclo dal primo valore nell'array fino all'ultimo valore nell'array compresi
//il numero attuale compare nell'array?
// se si lo aggiungo a somma
//ritorno somma

function missinNumbers(arr) {
  let sum = 0;
  let res = [];
  for (let i = array[0]; i <= arr[arr.length] - 1; i++) {
    if (!arr[i]) {
      sum.push[arr[i]];
    }
  }
  return sum;
  console.log(missingNumbers[(1, 2, 3, 4, 5, 6)]);
}
