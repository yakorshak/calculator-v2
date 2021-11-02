const culculatorElements = document.querySelector('.calculator-grid');
const allClearButton = document.querySelector('.button__all-clear');
const operationButtons = document.querySelector('.calculator-grid');
const calculationResultButton = document.querySelector('.button__equal');
const deleteButton = document.querySelector('.button__delete');

let previousOperand;
let currentOperand;


function movePreviousOperand(currentOperand){
    const output = document.querySelector('.previous-operand');
    output.append(currentOperand);
}

function getPreviousSymbol(){
    const output = document.querySelector('.previous-operand');
    outputValue = output.innerHTML;
    let lastSymbol = outputValue.toString().slice(-1);
    return lastSymbol;
}

function showCurrentOperand(buttonValue){
   const output = document.querySelector('.current-operand');
   output.append(buttonValue);

}

function getPreviousOperand() {
    const output = document.querySelector('.previous-operand');
    outputValue = output.innerHTML;
    operand = outputValue.slice(0, -1);
    return operand;

}

function getCurrentOperand() {
    const output = document.querySelector('.current-operand');
    const currentValue = output.innerHTML;
    return currentValue;
}

function getInputSympol(event) {
        const buttonObject = event.target;
        const buttonValue = buttonObject.innerHTML; 
        return buttonValue;
}

function showResult(result) {
    const output = document.querySelector('.current-operand');
    clearOutput();
    console.log(result);
    output.append(result);
}

function clearPreviousOutput(){
    const previousOutput = document.querySelector('.previous-operand');
    previousOutput.innerHTML = "";
}


function clearOutput(){
    const outputCurrentObject = document.querySelector('.current-operand');
    outputCurrentObject.innerHTML = "";
}

function deleteLastDigit(){
    const outputObject = document.querySelector('.current-operand');
    let outputElements = outputObject.innerHTML;
    let outputWithoutLastDigit = outputElements.substring(0, outputElements.length - 1);
    return outputWithoutLastDigit;
}


culculatorElements.addEventListener('click', function(event){
    if (event.target.closest('.button__number')) {
        let buttonValue = getInputSympol(event);
        showCurrentOperand(buttonValue);        
    }
} );

operationButtons.addEventListener('click', function(event) {
    if (event.target.closest('.button__operation')){
        buttonValue = getInputSympol(event);
        showCurrentOperand(buttonValue);
        let currentOperand = getCurrentOperand();
        movePreviousOperand(currentOperand);
        clearOutput();
    }
} );

calculationResultButton.addEventListener('click', function(event) {
    if (event.target.closest('.button__equal')){

        let operation = getPreviousSymbol();
        console.log(operation);
        currentOperand = getCurrentOperand();
        console.log(currentOperand)
        previousOperand = getPreviousOperand();
        console.log(previousOperand);

        switch(operation){
            case '*':
            result = previousOperand * currentOperand;
            showResult(result);
            clearPreviousOutput(); // if need to clear previous operand
            break;
            case '-':
            result = previousOperand - currentOperand;
            showResult(result);
            break;
            case '/':
            result = previousOperand / currentOperand;
            showResult(result);
            break;
            case '+':
            result = previousOperand + currentOperand;
            showResult(result);
            break;
        }
    }
} );




deleteButton.addEventListener('click', function(event) {
    if (event.target.closest('.button__delete')){
       let result = deleteLastDigit();
       clearOutput();
       showOutputValue(result);
}
} );


allClearButton.addEventListener('click', function(event) {
    if (event.target.closest('.button__all-clear')){
        clearOutput();
    }
} );
