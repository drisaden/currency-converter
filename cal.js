let display = document.querySelector('.display');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three= document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let dot = document.querySelector('.dot');
let eq = document.querySelector('.eql');
let mul = document.querySelector('.mul');
let div = document.querySelector('.div');
let add = document.querySelector('.add');
let sub = document.querySelector('.sub');
let clear = document.querySelector('.deleteicon');

//let mod = document.querySelector('.modulo');
//let neg = document.querySelector('.posinegative');
let cancel = document.querySelector('.cancel');

let operand1 = 0;
let operator = '';
let operand2 = 0;

function show(val) {
  display.innerHTML += val;
}

function multiply(){
  operand1 = display.innerHTML;
  display.innerHTML = '';
  operator = '*';
}

function divide(){
  operand1 = display.innerHTML;
  display.innerHTML =' ';
  operator = '/';
}

function plus(){
  operand1 = display.innerHTML;
  display.innerHTML = '';
  operator = '+';
}

function minus(){
  operand1 = display.innerHTML;
  display.innerHTML = '';
  operator = '-';
}

/*function modulo(){
  operand1 = display.innerHTML;
  display.innerHTML = '';
  operator = '%';
}*/

/*function negative(){
  let operator = '-';
  operand1 = display.innerHTML;
  let showIt = `${operator}${operand1}`;
  display.innerHTML = showIt;
}*/

function eql() {
  operand2 = display.innerHTML;
  if (operator == '*') {
  let output = operand1 * operand2;
  display.innerHTML = output;
  }
  else if (operator == '+') {
    let output = parseFloat(operand1, 10) + parseFloat(operand2, 10);
    display.innerHTML = output;
  }
  else if (operator == '-') {
    let output = operand1 - operand2;
    display.innerHTML = output;
  }
  else if (operator == '%') {
    let output = operand1 % operand2;
    display.innerHTML = output;
  }
  else if (operator == '/') {
    let output = operand1 / operand2;
    display.innerHTML = output;
  }
}



function validateInput(display) {
   // Replace any non-numeric characters and more than one period
   display.textContent = display.textContent.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
 }

    let periodClicked = false;

    const addToDisplay = (value) => {
      if (value === '.' && (periodClicked || display.textContent === '')) {
        return; // Prevent clicking period first or more than once
      }
      display.textContent += value;
      if (value === '.') {
        periodClicked = true;
      }
    }

    const addPeriod = () => {
      addToDisplay('.');
    }

    const backspace = () => {
      display.textContent = display.textContent.slice(0, -1);
      periodClicked = false; // Reset periodClicked when backspacing
    }
    
    cancel.addEventListener('click', function(){
  display.textContent = '';
  operand1 = 0;
  operand2 = 0;
  operator = '';
  // body...
});

one.addEventListener('click', function(){
 show(1);
});
two.addEventListener('click', function(){
 show(2);
});
three.addEventListener('click', function(){
 show(3);
});
four.addEventListener('click', function(){
 show(4);
});
five.addEventListener('click', function(){
 show(5);
});
six.addEventListener('click', function(){
 show(6);
});
seven.addEventListener('click', function(){
 show(7);
});
eight.addEventListener('click', function(){
 show(8);
});
nine.addEventListener('click', function(){
 show(9);
});
zero.addEventListener('click', function(){
 show(0);
});
clear.addEventListener('click', backspace);
dot.addEventListener('click', addPeriod);

    

/*neg.addEventListener('click', ()=>{
  negative();
});*/

mul.addEventListener('click', function(){
 multiply();
});
eq.addEventListener('click', function(){
 eql();
});
div.addEventListener('click', function(){
 divide();
});
add.addEventListener('click', function(){
 plus();
});
sub.addEventListener('click', function(){
 minus();
});
/*mod.addEventListener('click', function(){
 modulo();
});*/