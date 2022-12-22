const form = document.getElementById('pariodispari-form');
const numberField = document.getElementById('number');
const choiceField = document.getElementById('choice');
const result = document.getElementById('result');

function getRandomNumber(min,max){
    return Math.floor(Math.random()* (max + 1 - min ))+min;
}

function isEven(number){
    return number % 2 === 0;
}


form.addEventListener('submit',function (event){
    event.preventDefault();


    const userNumber = parseInt(numberField.value.trim());
    const userChoice = choiceField.value;



    if(isNaN(userNumber) || userNumber < 1 ||userNumber>5){
        alert('Il numero inserito non è valido');
    }
    if(!userChoice || (userChoice !== 'even' && userChoice !== 'odd')){
        alert('La scelta non è valida');
        return;
    }

    const cpuNumber = getRandomNumber(1,5);
    console.log(cpuNumber);

    const sum = userNumber + cpuNumber;
    console.log(sum);

    const rightChoice = isEven(sum) ? 'even'  : 'odd';

    const winner = userChoice  === rightChoice ? 'User' : 'Cpu';

    result.innerText = 'The winner is ' + winner;
})