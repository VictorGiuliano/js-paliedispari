/*Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma*/

const form = document.getElementById('word');
const button = document.getElementById('button');
const result = document.getElementById('respose');

function answer(wordUser){

    } 

button.addEventListener('click', function(){
    const wordUser =  form.value.trim(); 
    if(!wordUser){
        result.innerText = "Non hai inserito la parola";
    } console.log(wordUser);  
})

