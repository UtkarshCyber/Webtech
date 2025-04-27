let fullInputDisplay = document.getElementById("full-input");
let resultDisplay = document.getElementById("result");
let currentInput = '';
let fullInput = '';
let operator = '';
let firstNumber = '';

document.querySelectorAll('td').forEach(button => {
    button.addEventListener('click', function() {
        let value = this.innerText;

        // it is used to handle numbers and decimal point
        if (value >= '0' && value <= '9' || value === '.') {
            currentInput += value;
            fullInput += value;
            fullInputDisplay.innerText = fullInput;
            resultDisplay.innerText = currentInput;
        }
        // it clears all inputs
        else if (value === 'c') {
            currentInput = '';
            fullInput = '';
            operator = '';
            firstNumber = '';
            fullInputDisplay.innerText = '0';
            resultDisplay.innerText = '0';
        }
        // it calculate the result
        else if (value === '=') {
            if (firstNumber && operator) {
                let expression = firstNumber + operator + currentInput;
                let result = eval(expression);
                resultDisplay.innerText = result;
                fullInputDisplay.innerText = expression;
                currentInput = result;
                fullInput = '';
                firstNumber = '';
                operator = '';
            }
        }
        // is stores the operator and first number
        else {
            if (currentInput) {
                firstNumber = currentInput;
                operator = value;
                fullInput += value;
                fullInputDisplay.innerText = fullInput;
                currentInput = '';
            }
        }
    });
});
