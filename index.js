const res = document.querySelector('.res');
const vis = document.querySelector('.vis');
let currentInput = '';
let previousInput = '';
let operator = '';

function updateDisplay() {
    res.textContent = currentInput;
    vis.textContent = previousInput + ' ' + operator + ' ' + currentInput;
}

document.querySelectorAll('.n').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('value');
        
        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            updateDisplay();
        } else if (value === '+-' && currentInput !== '') {
            currentInput = currentInput * -1;
            updateDisplay();
        } else if (value === '%') {
            currentInput = (parseFloat(currentInput) / 100).toString();
            updateDisplay();
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput === '' && previousInput !== '') {
                operator = value;
                updateDisplay();
            } else if (currentInput !== '') {
                if (previousInput !== '') {
                    previousInput = operate(previousInput, currentInput, operator);
                    currentInput = '';
                    operator = value;
                } else {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                }
                updateDisplay();
            }
        } else if (value === '=') {
            if (previousInput !== '' && currentInput !== '' && operator !== '') {
                currentInput = operate(previousInput, currentInput, operator).toString();
                previousInput = '';
                operator = '';
                updateDisplay();
            }
        } else if (value === ',') {
            if (!currentInput.includes(',')) {
                currentInput += '.';
                updateDisplay();
            }
        } else {
            currentInput += value;
            updateDisplay();
        }
    });
});

function operate(num1, num2, operator) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return a / b;
    
    return null; // Em caso de erro
}
