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
  // Function to fetch available currencies
window.onload = async () => {
  try {
    // Fetch all currencies and their names
    const currenciesResponse = await fetch('https://api.fastforex.io/currencies?api_key=741059c5b3-8b544bdd4d-s6zcfw');
    const currenciesData = await currenciesResponse.json();
    

    // Populate currency select options
    const currencySelects = document.querySelectorAll('.currency-select');
    currencySelects.forEach(select => {
      for (const currencyCode in currenciesData.currencies) {
        const option = document.createElement('option');
        option.value = currencyCode;
        option.innerHTML = `(${currencyCode}) ${currenciesData.currencies[currencyCode]}`;
        select.appendChild(option);
      }
    });

    // Event listener for the convert button
    const convertButton = document.getElementById('convertButton');
    convertButton.addEventListener('click', async () => {
      // Get selected currencies and amount
      const fromCurrency = document.getElementById('fromCurrency').value;
      const toCurrency = document.getElementById('toCurrency').value;
      const amount = parseFloat(document.getElementById('display').value);

      // Check if the selected currencies are valid
      if (!currenciesData.currencies[fromCurrency] || !currenciesData.currencies[toCurrency]) {
        
        alert('Invalid currency selection');
        return;
      }

      // Call the conversion API
      const conversionApiUrl = `https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&api_key=741059c5b3-8b544bdd4d-s6zcfw`;

      

      try {
        const conversionApiResponse = await fetch(conversionApiUrl);

        const conversionApiData = await conversionApiResponse.json();
        console.log('Conversion API response:', conversionApiData);
        
        // Calculate converted amount
       const convertedAmount = conversionApiData.result[toCurrency];


        // Display the result in the second input
        document.getElementById('resultInput').value = convertedAmount.toFixed(2);

        
      } catch (error) {
        console.error('Error calling conversion API:', error);
      }
    });
  } catch (error) {
    console.log('Error fetching data:', error);
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