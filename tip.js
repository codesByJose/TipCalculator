


const reset = document.getElementById('reset');
const tipPerson = document.getElementById('tip-person');
const totalPerson = document.getElementById('total-person');
const billInput = document.getElementById('bill-input');
const numberInput = document.getElementById('number-input');
const custom = document.getElementById('custom');

// tip per person
function calculateTipAmountPerPerson(tipAmount, numberInput) {
  return tipAmount / numberInput;
}

// total per person
function calculateTotalAmountPerPerson(totalAmount, numberInput) {
  return totalAmount / numberInput
}

function getTip(button) {
  const billInput = parseFloat(document.getElementById('bill-input').value);
  const numberInput = parseFloat(document.getElementById('number-input').value);
  const tipPercentage = parseFloat(button.innerHTML.replace('%', ''));
  const tipAmount = billInput * tipPercentage / 100;
  const totalAmount = billInput + tipAmount;

  if (numberInput === 0 || isNaN(numberInput)) {
    const inputBox = document.getElementById('number-input').parentElement;
    const small = document.getElementById('error-message');
    inputBox.className = 'flex error';
    small.innerHTML = 'Number cannot be 0';
    tipPerson.textContent = 0.00.toFixed(2);
    totalPerson.textContent = 0.00.toFixed(2);
    return
  } else {
    const inputBox = document.getElementById('number-input').parentElement;
    const small = document.getElementById('error-message');
    inputBox.className = 'flex'
    small.innerHTML = '';
  }

  const tipAmountPerPerson = calculateTipAmountPerPerson(tipAmount, numberInput);
  const totalAmountPerPerson = calculateTotalAmountPerPerson(totalAmount, numberInput);

  // for display
  if (isNaN(tipAmountPerPerson) && isNaN(totalAmountPerPerson)) {
    tipPerson.textContent = 0.00.toFixed(2);
    totalPerson.textContent = 0.00.toFixed(2);
  } else if (tipAmountPerPerson === 0 && totalAmountPerPerson === 0) {
    tipPerson.textContent = 0.00.toFixed(2);
    totalPerson.textContent = 0.00.toFixed(2);
    console.log(tipAmountPerPerson, totalAmountPerPerson);
  } else {
    tipPerson.textContent = `${tipAmountPerPerson.toFixed(2)}`;
    totalPerson.textContent = `${totalAmountPerPerson.toFixed(2)}`;
    console.log(tipAmountPerPerson, totalAmountPerPerson);
  }
}

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
  button.addEventListener('click', () => getTip(button));
});

function customTipPerPerson(customTipAmount, numberInput) {
  return customTipAmount / numberInput
}

function totalCustomPerPerson(customTotalAmount, numberInput) {
  return customTotalAmount / numberInput
}

custom.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const billInput = parseFloat(document.getElementById('bill-input').value);
    const numberInput = parseFloat(document.getElementById('number-input').value);
    const customValue = parseFloat(custom.value);
    const customTipAmount = billInput * customValue / 100;
    const customTotalAmount = billInput + customTipAmount;
    const customTip = customTipPerPerson(customTipAmount, numberInput);
    const customTotal = totalCustomPerPerson(customTotalAmount, numberInput);
    // for display

    
  if (numberInput === 0 || isNaN(numberInput)) {
    const inputBox = document.getElementById('number-input').parentElement;
    const small = document.getElementById('error-message');
    inputBox.className = 'flex error';
    small.innerHTML = 'Number cannot be 0';
    tipPerson.textContent = 0.00.toFixed(2);
    totalPerson.textContent = 0.00.toFixed(2);
    return;
  } else {
    const inputBox = document.getElementById('number-input').parentElement;
    const small = document.getElementById('error-message');
    inputBox.className = 'flex'
    small.innerHTML = '';
  }

  if (isNaN(customTip) && isNaN(customTotal)) {
    tipPerson.textContent = 0.00.toFixed(2);
    totalPerson.textContent = 0.00.toFixed(2);
  } else if (customTip === 0 && customTotal === 0) {
    tipPerson.textContent = 0.00.toFixed(2);
    totalPerson.textContent = 0.00.toFixed(2);
    
  } else {
    tipPerson.textContent = `${customTipAmount.toFixed(2)}`;
    totalPerson.textContent = `${customTotalAmount.toFixed(2)}`;
    
  }
    
  }
});

reset.addEventListener('click', () => {
  billInput.value = '';
  numberInput.value = '';
  custom.value = '';
  tipPerson.textContent = 0.00.toFixed(2);
  totalPerson.textContent = 0.00.toFixed(2);
})


