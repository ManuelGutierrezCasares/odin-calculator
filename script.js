let operator = '';
let num1 = '';
let num2 = '';
const displayOutput = document.getElementById('display-output');
const buttonNumbers = document.querySelectorAll('.button-number');
const buttonOperators = document.querySelectorAll('.button-operator');
const buttons = document.querySelectorAll('button');



function displayButtons(){
    buttonNumbers.forEach(function (button){
        button.addEventListener('click',function(e){
            displayOutput.value = this.value;
            getNumbers(displayOutput);
        }
    )
    })
}
displayButtons()

function displayOperator(){
    buttonOperators.forEach(function (button){
        button.addEventListener('click',function(e){
            displayOutput.value = this.value;
            getOperator(displayOutput);
        }
    )
    })
}
displayOperator()

function getNumber(displayOutput){
    if(num1 === ''){
        num1 = displayOutput.value;
        console.log(num1)
    }else if (num2 === ''){
        num2 = displayOutput.value;
        console.log(num2)
    }
}
function getOperator(displayOutput){
    if(operator === ''){
        operator = displayOutput.value;
        console.log(operator)
    }
}



function operate(operator,num1,num2){

    switch (operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
        case '':
        case null:
        case undefined:
            return `Empty, null or undefined operator is not valid`;
        default:
            return `Operation ${operator} is not valid`;
    }
}

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

operate (operator,num1,num2)
