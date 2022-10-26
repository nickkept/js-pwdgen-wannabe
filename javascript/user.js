const userName = prompt("Inserisci il tuo Nome");
const userSurname = prompt("Inserisci il tuo Cognome");
const favColor = prompt("Inserisci il tuo colore preferito");

const frase = document.getElementById("frase");
frase.innerHTML = `${userName}${userSurname}${favColor}21`