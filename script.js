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
