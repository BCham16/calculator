
display = document.querySelector('#mainDisplay');
memoryDisplay = document.querySelector('#memoryDisplay')

let value1 = 0;
let operand = '';
let tracker = 0;

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
  tracker = 1;
  display.textContent = result;
  return Number(result);
}

function clearAll(){
  value1 = 0;
  operand = '';
  tracker = 0;
  clearDisplay()
}

function check(){
  if (tracker == 1){
    clearDisplay()
    tracker = 0;
  }
}

function eventAssignment(){
  document.querySelector('#num1').addEventListener('click', function(){
    check() 
    addToDisplay(1);}
    )
  document.querySelector('#num2').addEventListener('click', function(){
    check() 
    addToDisplay(2);}
    )
  document.querySelector('#num3').addEventListener('click', function(){
    check() 
    addToDisplay(3);}
    )
  document.querySelector('#num4').addEventListener('click', function(){
    check() 
    addToDisplay(4);}
    )
  document.querySelector('#num5').addEventListener('click', function(){
    check() 
    addToDisplay(5);}
    )
  document.querySelector('#num6').addEventListener('click', function(){
    check() 
    addToDisplay(6);}
    )
  document.querySelector('#num7').addEventListener('click', function(){
    check()  
    addToDisplay(7);}
    )
  document.querySelector('#num8').addEventListener('click', function(){
    check()  
    addToDisplay(8);}
    )
  document.querySelector('#num9').addEventListener('click', function(){
    check()  
    addToDisplay(9);}
    )
  document.querySelector('#num0').addEventListener('click', function(){
    check()  
    addToDisplay(0);}
    )
  document.querySelector('#plus').addEventListener('click', function(){
    value1 = display.textContent
    operand = 'add';
    tracker = 1;
  })
  document.querySelector('#minus').addEventListener('click', function(){
    value1 = display.textContent
    operand = 'subtract';
    tracker = 1;
  })
  document.querySelector('#times').addEventListener('click', function(){
    value1 = display.textContent
    operand = 'multiply';
    tracker = 1;
  })
  document.querySelector('#divide').addEventListener('click', function(){
    value1 = display.textContent
    operand = 'divide';
    tracker = 1;
  })
  document.querySelector('#equals').addEventListener('click', function(){
    value1 = complete(value1, operand)
  })
  document.querySelector('#period').addEventListener('click', function(){
    check()
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
        check(); 
        addToDisplay(1);
        return;
      case '2':
        check(); 
        addToDisplay(2);
        return;
      case '3':
        check(); 
        addToDisplay(3);
        return;
      case '4':
        check(); 
        addToDisplay(4);
        return;
      case '5':
        check(); 
        addToDisplay(5);
        return;
      case '6':
        check(); 
        addToDisplay(6);
        return;
      case '7':
        check(); 
        addToDisplay(7);
        return;
      case '8':
        check(); 
        addToDisplay(8);
        return;
      case '9':
        check(); 
        addToDisplay(9);
        return;
      case '0':
        check(); 
        addToDisplay(0);
        return;
      case '+':
        value1 = display.textContent
        operand = 'add';
        tracker = 1;
        return;
      case '-':
        value1 = display.textContent
        operand = 'subtract';
        tracker = 1;
        return;
      case '*':
        value1 = display.textContent
        operand = 'multiply';
        tracker = 1;
        return;
      case '/':
        value1 = display.textContent
        operand = 'divide';
        tracker = 1;
        return;
      case 'Enter':
        value1 = complete(value1, operand);
        return;
      case 'c':
        clearAll()
        return;
      case '.':
        check();
        addToDisplay('.');
        return;
      default: return;
    }
  })
}

clearAll()
eventAssignment()
