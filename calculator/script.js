const display = document.getElementById('con');

let expression = '';
let result = '';

function updateDisplay() {
    display.innerText = expression;
}

function handleButtonClick(value) {
    expression += value;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    result = '';
    updateDisplay();
}

// Function to evaluate the expression
function evaluateExpression() {
    try {
        const result = new Function('return ' + expression)();
        if (result === undefined || isNaN(result)) {
            throw 'Invalid expression';
        }
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = '';
        result = '';
        updateDisplay();
        alert('Error: ' + error);
    }
}

document.querySelectorAll('#number button').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.innerText));
});

document.getElementById('b15').addEventListener('click', clearDisplay);

document.getElementById('b12').addEventListener('click', evaluateExpression);
