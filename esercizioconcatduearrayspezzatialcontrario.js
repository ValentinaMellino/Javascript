/*scrivere una funzione chiamata invertiDa
che prende in ingresso un array e un numero, 
la funzione inverte l'array passato come argomento 
dalla posizione identificata dal numero passato in poi

non si deve modificare l'array passato in ingresso */
let arr []
function invertiDa(array, numero) {
  let result = [];
  let reverse = [];
  for (let i = 0; i < array.length; i++) {
    result.push (arr[i]);
  }
  for (let i = numero; i <= numero; i++) {
    result.unshift(array[i]);
  }
  return result.concat(reverse);
}
console.log(invertiDa([1,2,3,4,5,6], 4));
