//variables

let nomeUtente = prompt('Inserisci il tuo nome');
let cognomeUtente = prompt('Inserisci il tuo cognome');
let colorePreferito = prompt('Inserisci il tuo colore preferito');
const numeroRandom = 9;


console.log(nomeUtente + cognomeUtente + colorePreferito + numeroRandom);
document.writeln( `<p>La tua password è: <strong> ${ nomeUtente + cognomeUtente + colorePreferito + numeroRandom }</strong> </p>`);
