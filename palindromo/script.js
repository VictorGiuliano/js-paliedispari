/*Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma*/

const form = document.getElementById('word');
const button = document.getElementById('button');
const result = document.getElementById('respose');


button.addEventListener('click', function(){
    const wordUser =  form.value.trim(); 
    if(!wordUser){
        result.innerText = "Non hai inserito la parola";
    }
    const answer = getPalindrome(word); 
    getPalindrome(answer); 

})

const wordUser= prompt('Dammi una parola').trim(); 

function getPalindrome(word){
const letter= wordUser.length;    
let message = "è un palindromo";
for(let i=0; i< letter ;i++){
    if(wordUser[i] != wordUser[letter - 1 - i]){
        message = "Non è un palindromo";
    }
}
return message;
}

const answer = getPalindrome(word); 
console.log(answer);




















