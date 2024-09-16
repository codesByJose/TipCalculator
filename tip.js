const reset = document.getElementById('reset');
const tipPerson = document.getElementById('tip-person');
const totalPerson = document.getElementById('total-person');
const custom = document.getElementById('custom');
const inputBox = document.getElementById('number-input').parentElement;
const billInput = document.getElementById('bill-input');
const numberInput = document.getElementById('number-input');
const small = document.getElementById('error-message');
// tip per person
function calculateTipAmountPerPerson(tipAmount, numberValue) {
  return tipAmount / numberValue;
}
// total per person
function calculateTotalAmountPerPerson(totalAmount, numberValue) {
  return totalAmount / numberValue
}
function setError() {
  inputBox.className = 'flex error';
  small.innerHTML = 'Number cannot be 0';
  tipPerson.textContent = 0.00.toFixed(2);
  totalPerson.textContent = 0.00.toFixed(2);
  return;
}
function unsetError(){
  inputBox.className = 'flex'
  small.innerHTML = '';
}
function getTip(button) {
  const billValue = parseFloat(billInput.value);
  const numberValue = parseFloat(numberInput.value);
  const tipPercentage = parseFloat(button.innerHTML.replace('%', ''));
  const tipAmount = billValue * tipPercentage / 100;
  const totalAmount = billValue + tipAmount;

  switch(true){
    case isNaN(numberValue) || numberValue === 0:
       setError();
        break;
            default:
                unsetError();
}
  const tipAmountPerPerson = calculateTipAmountPerPerson(tipAmount, numberValue);
  const totalAmountPerPerson = calculateTotalAmountPerPerson(totalAmount, numberValue);
  // for display
  if (isNaN(tipAmountPerPerson) && isNaN(totalAmountPerPerson) || (tipAmountPerPerson === 0 && totalAmountPerPerson === 0)) {
    tipPerson.textContent = 0.00.toFixed(2);
    totalPerson.textContent = 0.00.toFixed(2);
  }
   else {
    tipPerson.textContent = `${tipAmountPerPerson.toFixed(2)}`;
    totalPerson.textContent = `${totalAmountPerPerson.toFixed(2)}`;
   }
 }

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
  button.addEventListener('click', () => getTip(button));
});

function customTipPerPerson(customTipAmount, numberValue) {
  return customTipAmount / numberValue
}

function totalCustomPerPerson(customTotalAmount, numberValue) {
  return customTotalAmount / numberValue
}

custom.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const billValue = parseFloat(billInput.value);
    const numberValue = parseFloat(numberInput.value);
    const customValue = parseFloat(custom.value);
    const customTipAmount = billValue * customValue / 100;
    const customTotalAmount = billValue + customTipAmount;
    const customTip = customTipPerPerson(customTipAmount, numberValue);
    const customTotal = totalCustomPerPerson(customTotalAmount, numberValue);
    // for display

    
  switch(true){
    case isNaN(numberValue) || numberValue === 0:
      setError();
       break;
           default:
               unsetError();
  }

  if (isNaN(customTip) && isNaN(customTotal) || (customTip === 0 && customTotal === 0)) {
      tipPerson.textContent = 0.00.toFixed(2);
      totalPerson.textContent = 0.00.toFixed(2);
  } else {
      tipPerson.textContent = `${customTip.toFixed(2)}`;
      totalPerson.textContent = `${customTotal.toFixed(2)}`;
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


