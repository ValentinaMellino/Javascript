/*1) scrivere una funzione che prende in ingresso un array di stringhe, la funzione deve ritornare la lunghezza 
dell'ultima stringa.
Tenere in considerazione che possono esserci spazi o punteggiatura alla fine della stringa, che non 
vanno conteggiati.*/

function lastString(array) {
  let contatore = 0;
  let ultimaStringaNonVuota = "";
  for (let i = 0; i < array.length; i++) {
    let stringaCorrente = array[i];
    if (stringaCorrente !== "") {
      ultimaStringaNonVuota = array[i];
    }
  }
  contatore = ultimaStringaNonVuota.length;
  return contatore;
}
let arrayDiStringhe = ["ciao", "come", "stai", "?", "bene", "grazie", ""];
console.log(lastString(arrayDiStringhe));
