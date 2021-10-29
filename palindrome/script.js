/*

TRACCIA: Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo.

*/


// variabili utili 
// 1. chiedo all'utente di inserire una parola -> prompt 
const userWord = prompt ("Inserisci una parola per scoprire se è palindroma");
console.log("la parola inserita dall'utente è: " , userWord);

// variabile utile per salvare la parola al letta al contrario
let reverseWord = ""; 

// creo la funzione 
function checkPalindromeWord (wordString) {

    var i = wordString.length - 1;

    // Con il ciclo while attraverso la lunghezza della parola 
    while ( i >= 0) {
        // partendo dalla fine della parola estraggo la lettera i-esima 
        letter = userWord[i];

        // aggiungo le lettere estratte in una variabile che va a formare la parola letta al contrario 
        reverseWord += wordString[i];

        i--
    }  

    return reverseWord;
}

// invoco la funzione e la associo ad una variabile 

let polindromeWord = checkPalindromeWord(userWord);
console.log(polindromeWord);


if (userWord === reverseWord) {
    console.log("la parola inserita è palindroma");
} else {
    console.log("la parola inserita non è palindroma");
}