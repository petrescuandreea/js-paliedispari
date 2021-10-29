
/*

TRACCIA: Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

const gameWinner = document.getElementById("winner");

// 1. chiedo all'utente di scommettere quindi scegliere pari o dispari -> prompt 
const bet = prompt ("Scegli 'pari' o 'dispari'");
console.log("L'utente ha scommesso sul risultato e secondo lui uscirà: " , bet);


// 2. chiedo all'utente di inserire un numero tra 1-5 ->prompt
const userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5"));
console.log("Il numero inserito dall'utente è: " , userNumber);


// 3. genero un numero random per il computer tra 1-5
// 3.1 creo la funzione
function numRandom1_5(max) {
    
    return Math.floor(Math.random() * max) + 1;
    
}

// 3.2 invoco la funzione e la associo ad una variabile 
let pcNumber = numRandom1_5(5);
console.log("Il numero del pc è: " , pcNumber);


// 4. sommo i due numeri
let sum = userNumber + pcNumber; 
console.log("La somma è:" , sum);


// 5. verifico se la somma sia pari o dispari e salvo il risultato
// 5.1 creo una variabile per salvare il risultato
let risult;
// 5.2 creo la funzione 
function checkPariDispari(sum) {

    if(sum % 2 === 0) {
        risult = "La somma è: pari";
    } else {
        risult = "La somma è: dispari";
    }

    return risult;
}

// 5.3 invoco la funzione e la associo ad una variabile 
let functionResult = checkPariDispari(sum);
console.log(functionResult);


// 6. confronto il risultato con ciò che ha scommesso l'utente e stampo l'output -> if
if(risult === bet) {
    gameWinner.innerHTML = "Ha vinto l'utente";
} else {
    gameWinner.innerHTML = "Ha vinto il pc";
}
