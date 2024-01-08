const resultElement = document.getElementById("main-title");

// Chiedo all'utente il suo nome
const myName = prompt("Qual è il tuo nome?");
console.log(myName);

// Chiedo all'utente il suo cognome
const mySurname = prompt("Qual è il tuo cognome?");
console.log(mySurname);

// Chiedo all'utente il suo colore preferito
const color = prompt("Qual è il tuo colore preferito?");
console.log(color);

// Creo la variabile con tutte e 3 le informazioni
const result = myName + mySurname + color + 23;
console.log(result);

// Stampo la variabile
resultElement.innerText = "La tua password è" + "" + result;
