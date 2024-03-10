/*1) scrivere una funzione insertSorted che prende in ingresso un array ordinato in modo
 crescente arr e un numero num, la funzione deve ritornare un nuovo array a cui e' stato aggiunto
  num in modo che l'ordine in arr sia preservato.
es per insertSorted([1, 2, 3, 6, 9]) e 7 ritorna [1, 2, 3, 6, 7, 9]
es per insertSorted([1, 2]) e 1 ritorna [1, 1, 2]
es per insertSorted([]) e 42 ritorna [42]*/

function insertSorted(arr, num) {
  let inserted = false;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num && !inserted) {
      result.push(num);
    }
    result.push(arr[i]);
  }
  return result;
  // // Se num è maggiore di tutti gli elementi in arr, aggiungilo alla fine
  // if (!inserted) {
  //   result.push(num);
}

console.log(insertSorted([1, 2, 3, 6, 9], 7));
