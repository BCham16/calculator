
display = document.querySelector('.display');
num1 = document.querySelector('#num1');
num2 = document.querySelector('#num2');
num3 = document.querySelector('#num3');
num4 = document.querySelector('#num4');
num5 = document.querySelector('#num5');
num6 = document.querySelector('#num6');
num7 = document.querySelector('#num7');
num8 = document.querySelector('#num8');
num9 = document.querySelector('#num9');
num0 = document.querySelector('#num0');
plus = document.querySelector('#plus');
minus = document.querySelector('#minus');
times = document.querySelector('#times');
equals = document.querySelector('#equals');
divide = document.querySelector('#divide');
clear = document.querySelector('#clear');

num1.addEventListener('click', function(){addToDisplay(1)})
num2.addEventListener('click', function(){addToDisplay(2)})
num3.addEventListener('click', function(){addToDisplay(3)})
num4.addEventListener('click', function(){addToDisplay(4)})
num5.addEventListener('click', function(){addToDisplay(5)})
num6.addEventListener('click', function(){addToDisplay(6)})
num7.addEventListener('click', function(){addToDisplay(7)})
num8.addEventListener('click', function(){addToDisplay(8)})
num9.addEventListener('click', function(){addToDisplay(9)})
num0.addEventListener('click', function(){addToDisplay(0)})
plus.addEventListener('click', function(){
  value1 = first()
  operand = 'add';
})
minus.addEventListener('click', function(){
  value1 = first()
  operand = 'subtract';
})
times.addEventListener('click', function(){
  value1 = first()
  operand = 'multiply';
})
divide.addEventListener('click', function(){
  value1 = first()
  operand = 'divide';
})
equals.addEventListener('click', function(){value1 = complete(value1, operand)})
clear.addEventListener('click', function(){clearAll()})

let value1 = 0;
let operand = '';

function addToDisplay(value){
  display.textContent == 0 ? 
  display.textContent = value : display.textContent += value 
}

function clearDisplay(){
  display.textContent = 0
}

function addition(){
  value1 = display.textContent
  clearDisplay();
  return value1;
}

function complete(value1, operand){
  value2 = display.textContent
  switch(operand){
    case 'add':
      result = Number(value1) + Number(value2);
      break;
    case 'subtract':
      result = Number(value1) - Number(value2);
      break;
    case 'multiply':
      result = Number(value1) * Number(value2);
      break;
    case 'divide':
      result = Number(value1) / Number(value2);
      break;
    default:
      result = "error";
  }
  display.textContent = result
  return Number(result);
}

function clearAll(){
  value1 = 0;
  value2 = 0;
  operand = '';
  clearDisplay()
}

function first(){
  if (value1 !== 0) complete(value1, operand);
  value1 = display.textContent
  clearDisplay();
  return value1;
}

clearAll()

