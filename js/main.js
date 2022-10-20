// chiede numero di km che il passeggero ha intenzione di percorrere
const kmNumber = Number(prompt(`Inserisci il numero di km che hai intenzione di percorrere`));

// stampa l'input nella console
console.log(kmNumber);

// stampa l'input nella pagina
document.getElementById(`kmNumber`).innerHTML = kmNumber;



