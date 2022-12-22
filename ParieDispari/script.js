const form = document.getElementById('pariodispari-form');
const numberField = document.getElementById('number');
const choiceField = document.getElementById('choice');
const result = document.getElementById('result');

form.addEventListener('submit',function (event){
    event.preventDefault();


    const userNumber = parseInt(numberField.value.trim());
    const userChoice = choiceField.value;



    if(isNaN(number)||number<1||number>5){
        alert('Il numero inserito non è valido');
    }
})