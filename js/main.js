// chiede numero di km che il passeggero ha intenzione di percorrere
const kmNumber = Number(prompt(`Inserisci il numero di km che hai intenzione di percorrere:`));
// stampa l'input nella console
console.log(`Numero km: ` ,kmNumber);
// stampa l'input nella pagina
document.getElementById(`kmNumber`).innerHTML = kmNumber;


// chiede l'età del passeggero
const age = Number(prompt(`Inserisci la tua età:`));
// stampa l'input nella console
console.log(`Età dell'utente: `,age);
// stampa l'input nella pagina
document.getElementById(`age`).innerHTML = age;


// assegna il valore 0.21 alla costante priceMultiplier
const priceMultiplier = Number(0.21);
// calcola il prezzo del biglietto moltiplicando il numero di km inseriti dall'utente per 0,21
const fullPrice = kmNumber * priceMultiplier.toFixed(1);
// stampa il risultato nella console 
console.log (`Prezzo seza sconto: `,fullPrice);

