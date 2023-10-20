let display = document.getElementById('display');
let currentValue = '';
let currentOperator = '';
let previousValue = '';

function appendToDisplay(value) {
  currentValue += value;
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  currentOperator = '';
  previousValue = '';
  display.value = '';
}

function calculateResult() {
  previousValue = currentValue;
  currentValue = eval(previousValue);
  display.value = currentValue;
}

