/*Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma*/

const form = document.getElementById('word');
const button = document.getElementById('button');
const result = document.getElementById('respose');




//const wordUser= prompt('Dammi una parola').trim(); 

function getPalindrome(){
const wordUser = ' ';
const letter= wordUser.length;
let message = " ";
for(let i=0; i< letter ;i++){
    if(wordUser[i] != wordUser[letter - 1 - i]){
        message = "è un palindromo";
    }else{
        message = "non è un palindromo";
    }
}
return message;
}

//const cosa = getPalindrome();
//console.log(cosa);

button.addEventListener('click', function(){
    const wordUser =  form.value.trim(); 
    if(!wordUser){
        result.innerText = "Non hai inserito la parola";
    }
    const messaggio = getPalindrome();
    console.log(messaggio);
    result.innerText = messaggio;
})















/*const message = " ";
function palindrome(){  
        const correntWord = wordUser;
        const letter = correntWord[i]; 

        for (i = correntWord.length-1; i >= 0; i--){  
        const all = letter + letter;  
        all = letter + correntWord[i];  
        }  

        if (correntWord == letter){
        message = " is a Palindrome String ";  
        console.log(message);   
        }
        else{
        message = " is not a Palindrome String";  
        console.log(message);  
        }   
       return message; 
}*/




