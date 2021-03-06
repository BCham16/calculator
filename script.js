
display = document.querySelector('#mainDisplay');
memoryDisplay = document.querySelector('#memoryDisplay')

let value1 = 0;
let operand = '';

function addToDisplay(value){
  display.textContent == 0 ? 
  display.textContent = value : display.textContent += value 
}

function clearDisplay(){
  display.textContent = 0
}

function complete(value1, operand){
  const value2 = display.textContent
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
      result = display.textContent;
      break;
  }
  clearAll()
  display.textContent = result;
  return Number(result);
}

function clearAll(){
  value1 = 0;
  operand = '';
  clearDisplay()
}

function first(){
  if (value1 !== 0) complete(value1, operand);
  value1 = display.textContent
  clearDisplay()
  return value1;
}

function eventAssignment(){
  document.querySelector('#num1').addEventListener('click', function(){
    addToDisplay(1);}
    )
  document.querySelector('#num2').addEventListener('click', function(){
    addToDisplay(2);}
    )
  document.querySelector('#num3').addEventListener('click', function(){
    addToDisplay(3);}
    )
  document.querySelector('#num4').addEventListener('click', function(){
    addToDisplay(4);}
    )
  document.querySelector('#num5').addEventListener('click', function(){
    addToDisplay(5);}
    )
  document.querySelector('#num6').addEventListener('click', function(){
    addToDisplay(6);}
    )
  document.querySelector('#num7').addEventListener('click', function(){
    addToDisplay(7);}
    )
  document.querySelector('#num8').addEventListener('click', function(){ 
    addToDisplay(8);}
    )
  document.querySelector('#num9').addEventListener('click', function(){    
    addToDisplay(9);}
    )
  document.querySelector('#num0').addEventListener('click', function(){
    addToDisplay(0);}
    )
  document.querySelector('#plus').addEventListener('click', function(){
    value1 = first();
    operand = 'add';
  })
  document.querySelector('#minus').addEventListener('click', function(){
    value1 = first();
    operand = 'subtract';
  })
  document.querySelector('#times').addEventListener('click', function(){
    value1 = first();
    operand = 'multiply';
  })
  document.querySelector('#divide').addEventListener('click', function(){
    value1 = first();
    operand = 'divide'
  })
  document.querySelector('#equals').addEventListener('click', function(){
    value1 = complete(value1, operand)
  })
  document.querySelector('#period').addEventListener('click', function(){
    if (display.textContent % 1 == 0) addToDisplay('.');}
    )
  document.querySelector('#clear').addEventListener('click', function(){
    clearAll()
  })
  document.querySelector('#mPlus').addEventListener('click', function(){
    if (memoryDisplay.textContent == 'Memory') memoryDisplay.textContent = '';
    memoryDisplay.textContent = display.textContent}
    )
  document.querySelector('#mRecall').addEventListener('click', function(){
    display.textContent = memoryDisplay.textContent}
    )
  document.querySelector('#mMinus').addEventListener('click', function(){
    memoryDisplay.textContent = 'Memory'}
    )
  document.addEventListener('keypress', function(x){
    key = x.key
    switch(key){
      case '1':
        addToDisplay(1);
        return;
      case '2':
        addToDisplay(2);
        return;
      case '3':
        addToDisplay(3);
        return;
      case '4':
        addToDisplay(4);
        return;
      case '5':
        addToDisplay(5);
        return;
      case '6':
        addToDisplay(6);
        return;
      case '7':
        addToDisplay(7);
        return;
      case '8':
        addToDisplay(8);
        return;
      case '9':
        addToDisplay(9);
        return;
      case '0':
        addToDisplay(0);
        return;
      case '+':
        value1 = first();
        operand = 'add';
        return;
      case '-':
        value1 = first();
        operand = 'subtract';
        return;
      case '*':
        value1 = first();
        operand = 'multiply';
        return;
      case '/':
        value1 = first();
        operand = 'divide';
        return;
      case 'Enter':
        value1 = complete(value1, operand);
        return;
      case 'c':
        clearAll()
        return;
      case '.':
        if (display.textContent % 1 == 0) addToDisplay('.');
        return;
      default: return;
    }
  })
}

clearAll()
eventAssignment()