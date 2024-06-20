let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  if (parseFloat(b) === 0) {
    return 'Error: Cannot divide by zero';
  }
  return parseFloat(a) / parseFloat(b);
}


function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Error: Invalid operator';
  }
}


function updateDisplay(value) {
  document.querySelector('.display').textContent = value;
}

function clearDisplay() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  result = '';
  updateDisplay('0');
}
