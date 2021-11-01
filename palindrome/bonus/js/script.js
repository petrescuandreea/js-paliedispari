/*

TRACCIA: Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo.

*/

const userWord = document.getElementById("word");
const button = document.getElementById("btn");
const palindromeWordResult = document.getElementById("result");


button.addEventListener("click" , 
    function() {

        let userInput = userWord.value;
       // variabile utile per salvare la parola al letta al contrario
        let reverseWord = ""; 

        // creo la funzione 
        function checkPalindromeWord (wordString) {

            var i = wordString.length - 1;

            // Con il ciclo while attraverso la lunghezza della parola 
            while ( i >= 0) {
                // partendo dalla fine della parola estraggo la lettera i-esima 
                letter = userInput[i];

                // aggiungo le lettere estratte in una variabile che va a formare la parola letta al contrario 
                reverseWord += wordString[i];

                i--
            }  

            return reverseWord;
        }

        // invoco la funzione e la associo ad una variabile 

        let polindromeWord = checkPalindromeWord(userInput);
        console.log(polindromeWord);


        if (userInput === reverseWord) {
            palindromeWordResult.innerHTML = ("La parola inserita è palindroma");
            palindromeWordResult.classList.add("pos-result");


        } else {
            palindromeWordResult.innerHTML = ("La parola inserita non è palindroma");
            palindromeWordResult.classList.add("neg-result");
        }


});

