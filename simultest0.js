/*
0) scrivere una funzione che dato un array che contiene indirizzi email stampi i 3 domini piu' comuni e i 
relativi indirizzi email nel seguente modo:
Assumendo che questo sia l'array di indirizzi email e assumendo che una email sia sempre in questa forma: 
USERNAME@DOMAIN.TLD (Top Level Domain)


[
  "edmond.dantes@marsiglia.fr",
  "edmond.dantes@chateudif.fr"
  "zatarra@luigivampa.fr",
  "diego@luigivampa.fr",
  "count.montecristo@marsiglia.fr",
  "mercedes@marsiglia.fr",
  "monsieur.dorleac@chateudif.fr",
  "fernando.mondego@morcef.fr",
]

...questo sarebbe l'output (notate che l'ordine con cui compaiono gli indirizzi email deve essere lo stesso con cui compaiono nell'array originale):
marsiglia.fr
    edmond.dantes@marsiglia.fr
    count.montecristo@marsiglia.fr
    mercedes@marsiglia.fr
luigivampa.fr
    zatarra@luigivampa.fr
    diego@luigivampa.fr
chateudif.fr
    edmond.dantes@chateudif.fr
    monsieur.dorleac@chateudif.fr */

// creo una mappa per raggruppare gli indirizzi email in cui le chiavi possono essere i domini
//e i valori possono essere gli array di indirizzi email

// dichiaro una variabile globale con tutti gli indirizzi
//una mappa per raggruppare gli indirizzi per dominio

// per contare ed estrarre i domini mi serve un ciclo for

// Uso indexof x trovare l'indice della @ all'interno di ciascun indirizzo email
//Se la @ è presente estrapolo il dominio utilizzzando substring partendo da dopo la @
// Se il dominio non è presente lo aggiungo come chiave e lo associo ad un array vuoto
//creo una variabile per mettere i domini ordinati

let MappaEmail = {
  "marsiglia.fr": ["edmond.dantes", "count.montecristo", "mercedes"],
  "luigivampa.fr": ["zatarra", "diego"],
  "chateudif.fr": ["edmond.dantes", "monsieur.dorleac"],
  "morcef.fr": ["fernando.mondego"],
};

let indirizzi = [
  "edmond.dantes@marsiglia.fr",
  "edmond.dantes@chateudif.fr",
  "zatarra@luigivampa.fr",
  "diego@luigivampa.fr",
  "count.montecristo@marsiglia.fr",
  "mercedes@marsiglia.fr",
  "monsieur.dorleac@chateudif.fr",
  "fernando.mondego@morcef.fr",
];

function raggruppaPerDominio(indirizziEmail) {
  let raggruppaEmail = {};

  for (let i = 0; i < indirizziEmail.length; i++) {
    let indirizzoEmail = indirizziEmail[i].split("@")[1];

    if (!res[domain]) {
      res[domain] = [];
    }
    res[domain].push(arr[i]);
  }
  return res;
}
