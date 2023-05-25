

function add(firstNumber, secondNumber) {
    return (firstNumber + secondNumber);
}

function subtract(firstNumber, secondNumber) {
    return (firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
    return (firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
    return (firstNumber / secondNumber);
}


let firstNumber, secondNumber, operation;


function operate(firstNumber, secondNumber, operation) {

    if (operation == 'add') {
        return add(firstNumber, secondNumber);
    }

    else if (operation == 'subtract') {
        return subtract(firstNumber, secondNumber);
    }

    else if (operation == 'multiply') {
        return multiply(firstNumber, secondNumber);
    }

    else {
        return divide(firstNumber, secondNumber);
    }

}


const display = document.querySelector('.display-screen');

let displayValue = 0;

display.textContent = displayValue;

const numbers = Array.from(document.querySelectorAll(".number"));


function populateDisplay(e) {

    if (displayValue.length >= 9) {
        return;
    }

    if(numbers.includes(e.target)){

        if (displayValue == '0') {
            displayValue = e.target.textContent;
            display.textContent = Number(displayValue).toLocaleString('en-IN');
        }
        else {
            displayValue = displayValue + e.target.textContent;
            display.textContent = Number(displayValue).toLocaleString('en-IN');
        }
    }
}

window.addEventListener('click', populateDisplay);