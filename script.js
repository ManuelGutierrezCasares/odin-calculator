let operator = '';
let num1 = '0';
let num2 = '0';
let result = '';
const displayOutput = document.getElementById('display-output');
const buttonNumbers = document.querySelectorAll('.button-number');
const buttonOperators = document.querySelectorAll('.button-operator');
const buttonClear = document.querySelector('.button-clear');
const buttonEqual = document.querySelector('.button-equal');
const buttonDecimal = document.getElementById('decimal');
let positionNum2 = false;
let decimalIsSet = false;

/* still lacking
    - UI improvements (aesthetics)
    - Keyboard support  */


buttonEqual.addEventListener('click',function(e){
    if(operator === '' || num1 === '' || num2 === ''){
        let errorNum1 = num1 === '' ? '**EMPTY**':num1;
        let errorNum2 = num2 === '' ? '**EMPTY**':num2;
        let errorOperator = operator === '' ? '**EMPTY**':operator;
        alert(`ERROR, please enter all the terms.\nNumber 1    =    ${errorNum1}\nNumber2    =    ${errorNum2}\nOperator    =    ${errorOperator}`);    
    }else{
        positionNum2 = false;
        //THIS IS THE RESULT OF THE OPERATION
        result = calculate(num1,num2,operator);
        result = Math.round(result*100000)/100000;
        displayOutput.value = result;
        console.log(result);
    } 
});

function calculate(number1,number2,ope){
    number1=Number(number1);
    number2=Number(number2);
    if(number2 === 0 && ope === '/'){
        alert(`ERROR. YOU CAN NOT DIVIDE BY ZERO.\n\nSELECT CLEAR AND TRY AGAIN.`);
        clear();
    }else{
    if(!isNaN(number1) || !isNaN(number2)){
    switch(ope){
        case '+':
            return number1 + number2
        case '-':
            return number1 - number2
        case '*':
            return number1 * number2
        case '/':
            return number1 / number2
        default:
            break;
        }
    }else{
        console.log('ERROR NUM1 O NUM2 NOT NUMERIC')
    }
    }
}

buttonOperators.forEach(e=>e.addEventListener('click',function(e){
    if (operator === ''){
        getOperator(this.value);
    }else{
        num1 = calculate(num1,num2,operator);
        num2 = ''
        //HERE IS THE RESULT WHEN CHAINING OPERATIONS
        displayOutput.value = Math.round(num1*100000)/100000;;
        getOperator(this.value);
    }
    decimalIsSet = false;
    
}))

function clear(){
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    positionNum2 = false;
    decimalIsSet = false;
    displayOutput.value = '0';
}

buttonClear.addEventListener('click',clear);

buttonNumbers.forEach(e=>e.addEventListener('click',function(e){
    if(!positionNum2){
        getNum1(this.value);
        displayOutput.value = num1;
    }else{
        getNum2(this.value);
        displayOutput.value = num2;
    }
}))

buttonDecimal.addEventListener('click',e=> decimalIsSet = true);


function getOperator(ope){
    operator = ope;
    positionNum2 = true;
}

function getNum1(num){
    if(num === '.' && decimalIsSet === true){
        return;
    }else if (num == 0 && num1 == 0){
        num1 = '0';
    }else{
        num1 = num1.concat(num);
    }
}

function getNum2(num){
    if(num === '.' && decimalIsSet === true){
        return;
    }else if (num == 0 && num2 == 0){
        num2 = '0';
    }else{
        num2 = num2.concat(num);
    }
}

