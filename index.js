

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

const operations = Array.from(document.querySelectorAll(".operation"));

const equal = document.querySelector('.equal-sign');

let firstNumber = 0, secondNumber = 0, operation;

function populateDisplay(e) {

    if (displayValue.length >= 9) {
        //Do nothing
    }

    else {

        if (numbers.includes(e.target)) {

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

    if (operations.includes(e.target)) {

        if(firstNumber == 0) {
            firstNumber = Number(displayValue);
            displayValue = 0;
        }
        else {
            secondNumber = Number(displayValue);
        }

        if (e.target.textContent == '+') {
            if (!operation) {
                operation = 'add';
            }
            else {
                displayValue = operate(firstNumber, secondNumber, operation);
                display.textContent = Number(displayValue).toLocaleString('en-IN');
                firstNumber = Number(displayValue);
                displayValue = 0;
                operation = 'add';
            }

        }
        else if (e.target.textContent == '-') {
            if (!operation) {
                operation = 'subtract';
            }
            else {
                displayValue = operate(firstNumber, secondNumber, operation);
                display.textContent = Number(displayValue).toLocaleString('en-IN');
                firstNumber = Number(displayValue);
                displayValue = 0;
                operation = 'subtract';
            }
        }
        else if (e.target.textContent == '×') {
            if (!operation) {
                operation = 'multiply';
            }
            else {
                displayValue = operate(firstNumber, secondNumber, operation);
                display.textContent = Number(displayValue).toLocaleString('en-IN');
                firstNumber = Number(displayValue);
                displayValue = 0;
                operation = 'multiply';
            }
        }
        else {
            if (!operation) {
                operation = 'divide';
            }
            else {
                displayValue = operate(firstNumber, secondNumber, operation);
                display.textContent = Number(displayValue).toLocaleString('en-IN');
                firstNumber = Number(displayValue);
                displayValue = 0;
                operation = 'divide';
            }
        }

    }

    if (e.target == equal) {

        secondNumber = Number(displayValue);

        displayValue = operate(firstNumber, secondNumber, operation);
        display.textContent = Number(displayValue).toLocaleString('en-IN');

    }
}

window.addEventListener('click', populateDisplay);