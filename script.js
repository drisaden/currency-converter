function toggleBreakdown() {
    const breakdownDiv = document.getElementById('breakdown');
    const caretIcon = document.getElementById('caretIcon');
    const toggleText = document.getElementById('toggleText');

    if (breakdownDiv.style.display === 'none' || breakdownDiv.style.display === '') {
      breakdownDiv.style.display = 'block';
      caretIcon.className = 'fa fa-caret-up ml-2';
      toggleText.innerText = 'Hide';
    } else {
      breakdownDiv.style.display = 'none';
      caretIcon.className = 'fa fa-caret-down ml-2';
      toggleText.innerText = 'Show';
    }
  }
  
  window.onload = async () => {
  try {
    // Fetch the currency data (exchange rates)
    const exchangeResponse = await fetch('http://data.fixer.io/api/latest?access_key=8ea2fa9867e38b2ddb229a08960ebb54');
    if (!exchangeResponse.ok) {
      throw new Error('Error fetching exchange rates');
    }
    const exchangeData = await exchangeResponse.json();
    exchangeRates = exchangeData.rates;

    // Fetch the currency names and codes
    const symbolResponse = await fetch('http://data.fixer.io/api/symbols?access_key=8ea2fa9867e38b2ddb229a08960ebb54');
    if (!symbolResponse.ok) {
      throw new Error('Error fetching symbols');
    }
    const symbolData = await symbolResponse.json();

    // Get the select elements and convert button
    const fromCurrencySelect = document.querySelector('#fromCurrency');
    const toCurrencySelect = document.querySelector('#toCurrency');
    const convertButton = document.querySelector('#convertButton');
    const inputAmount = document.querySelector('#display');
    const resultInput = document.querySelector('#resultInput');
    const resultsContainer = document.getElementById('resultsContainer');

    // Populate the options in the select elements
    for (const currency in exchangeData.rates) {
      // Create option element for 'from' currency
      const fromOption = document.createElement('option');
      fromOption.value = currency;
      fromOption.innerHTML = `(${currency})${symbolData.symbols[currency]}`;
      fromCurrencySelect.appendChild(fromOption);

      // Create option element for 'to' currency
      const toOption = document.createElement('option');
      toOption.value = currency;
      toOption.innerHTML = `(${currency})${symbolData.symbols[currency]}`;
      toCurrencySelect.appendChild(toOption);
    }

      // Add event listener to the convert button
      convertButton.addEventListener('click', () => {
        // Get selected currencies and amount
        const fromCurrency = fromCurrencySelect.value;
        const amount = parseFloat(inputAmount.value);

        // Create an array to store converted amounts
        const convertedAmounts = [];

        // Convert selected currency and store the result
        const selectedConversionRate = exchangeRates[toCurrencySelect.value] / exchangeRates[fromCurrency];
        const selectedConvertedAmount = amount * selectedConversionRate;
        resultInput.value = selectedConvertedAmount;
        convertedAmounts.push({ currency: toCurrencySelect.value, amount: selectedConvertedAmount.toFixed(2) });

        // Convert into other currencies
        for (const currency in exchangeRates) {
          if (currency !== fromCurrency && currency !== toCurrencySelect.value) {
            const conversionRate = exchangeRates[currency] / exchangeRates[fromCurrency];
            const convertedAmount = amount * conversionRate;
            convertedAmounts.push({ currency, amount: convertedAmount.toFixed(2) });
          }
        }

        // Display the results
        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.innerHTML = ''; // Clear previous results

        convertedAmounts.slice(1).forEach(result => {
          const resultElement = document.createElement('div');
          const currencyName = symbolData.symbols[result.currency];
          resultElement.innerHTML = `Converted to ${result.currency} (${currencyName}): ${result.amount}`;
          resultsContainer.appendChild(resultElement);
        });
      });
} catch (error) {
    console.log('Error:', error);
  }
};

let display = document.getElementById('display');
 function validateInput(input) {
   // Replace any non-numeric characters and more than one period
   input.value = input.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
 }

    let periodClicked = false;

    const addToDisplay = (value) => {
      if (value === '.' && (periodClicked || display.value === '')) {
        return; // Prevent clicking period first or more than once
      }
      display.value += value;
      if (value === '.') {
        periodClicked = true;
      }
    }

    const addPeriod = () => {
      addToDisplay('.');
    }

    const backspace = () => {
      display.value = display.value.slice(0, -1);
      periodClicked = false; // Reset periodClicked when backspacing
    }
    const getResultAsNumber = () => {
  return parseFloat(display.value); // Converts the string to a floating-point number
}

// Event listeners
    document.getElementById('one').addEventListener('click', () => addToDisplay('1'));
    document.getElementById('two').addEventListener('click', () => addToDisplay('2'));
    document.getElementById('three').addEventListener('click', () => addToDisplay('3'));
    document.getElementById('four').addEventListener('click', () => addToDisplay('4'));
    document.getElementById('five').addEventListener('click', () => addToDisplay('5'));
    document.getElementById('six').addEventListener('click', () => addToDisplay('6'));
    document.getElementById('seven').addEventListener('click', () => addToDisplay('7'));
    document.getElementById('eight').addEventListener('click', () => addToDisplay('8'));
    document.getElementById('nine').addEventListener('click', () => addToDisplay('9'));

    document.getElementById('zero').addEventListener('click', () => addToDisplay('0'));
    
    document.getElementById('dotPeriod').addEventListener('click', addPeriod);

    document.getElementById('deleteIcon').addEventListener('click', backspace);
    

function swapValues(element1, element2) {
    const tempValue = element1.value;
    element1.value = element2.value;
    element2.value = tempValue;
  }

  // Add event listener to the Exchange button
  const exchangeButton = document.getElementById('exchange');
  exchangeButton.addEventListener('click', () => {
    // Get the elements to be swapped
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const fromAmountInput = document.getElementById('display');
    const toAmountInput = document.getElementById('toAmountInput');





    // Swap values between 'from' and 'to' select elements
    swapValues(fromCurrencySelect, toCurrencySelect);

    // Swap values between 'from' and 'to' amount input elements
    swapValues(fromAmountInput, toAmountInput);
  });