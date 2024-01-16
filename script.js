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
/*window.onload = async () => {
  try {
    // Fetch all currencies and their names
    const currenciesResponse = await fetch('https://api.fastforex.io/currencies?api_key=554a18ba39-e8eac7597e-s7bta8');
    
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
      const conversionApiUrl = `https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&api_key=554a18ba39-e8eac7597e-s7bta8`;

      

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
};*/

/*window.onload = async () => {
  try {
    // Fetch all currencies and their names
    const currenciesResponse = await fetch('https://api.fastforex.io/currencies?api_key=554a18ba39-e8eac7597e-s7bta8');
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
      const conversionApiUrl = `https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&api_key=554a18ba39-e8eac7597e-s7bta8`;

      try {
        const conversionApiResponse = await fetch(conversionApiUrl);
        const conversionApiData = await conversionApiResponse.json();
        console.log('Conversion API response:', conversionApiData);

        // Calculate converted amount
        const convertedAmount = conversionApiData.result[toCurrency];

        // Display the result in the second input
        document.getElementById('resultInput').value = convertedAmount.toFixed(2);

        // Fetch conversion rates for all currencies
        const conversionRatesApiUrl = `https://api.fastforex.io/fetch-all?from=${fromCurrency}&api_key=554a18ba39-e8eac7597e-s7bta8`;

        try {
          const conversionRatesResponse = await fetch(conversionRatesApiUrl);
          const conversionRatesData = await conversionRatesResponse.json();
          console.log('Conversion rates API response:', conversionRatesData);

          // Update elements with converted amounts
          const otherCurrenciesContainer = document.getElementById('otherCurrenciesContainer');
          otherCurrenciesContainer.innerHTML = ''; // Clear previous results

          for (const currencyCode in conversionRatesData.results) {
            const convertedAmount = amount * conversionRatesData.results[currencyCode];
            const currencyName = currenciesData.currencies[currencyCode];

            // Create and append elements to the container
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `(${currencyCode})-${currencyName}: <span class="font-bold tx-diamond">${convertedAmount.toFixed(2)}</span>`;
            otherCurrenciesContainer.appendChild(resultElement);
          }
        } catch (error) {
          console.error('Error calling conversion rates API:', error);
        }
      } catch (error) {
        console.error('Error calling conversion API:', error);
      }
    });
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};*/

window.onload = async () => {
  try {
    // Show spinner on page load
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    // Fetch all currencies and their names
    const currenciesResponse = await fetch('https://api.fastforex.io/currencies?api_key=554a18ba39-e8eac7597e-s7bta8');
    const currenciesData = await currenciesResponse.json();

    const singleCurrencyResponse = await fetch('https://api.fastforex.io/convert?from=USD&to=NGN&amount=1&api_key=554a18ba39-e8eac7597e-s7bta8');
    const singleCurrencyData = await singleCurrencyResponse.json();
    const singleCurrencyRate = singleCurrencyData.result.NGN;
    document.getElementById('resultInput').placeholder = `1 USD = ${singleCurrencyRate.toFixed(2)} NGN`;

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

    // Hide spinner after successful currencies API response
    spinner.style.display = 'none';

    // Event listener for the convert button
    const convertButton = document.getElementById('convertButton');
    convertButton.addEventListener('click', async () => {
      try {
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
        const conversionApiUrl = `https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&api_key=554a18ba39-e8eac7597e-s7bta8`;

        try {
          const conversionApiResponse = await fetch(conversionApiUrl);
          const conversionApiData = await conversionApiResponse.json();

          // Calculate converted amount
          const convertedAmount = conversionApiData.result[toCurrency];

          // Display the result in the second input
          document.getElementById('resultInput').value = convertedAmount.toFixed(2);

          // Record the conversion in the recentConversion div
          recordConversion(fromCurrency, amount, toCurrency, convertedAmount);

          // Fetch conversion rates for all currencies
          const conversionRatesApiUrl = `https://api.fastforex.io/fetch-all?from=${fromCurrency}&api_key=554a18ba39-e8eac7597e-s7bta8`;

          try {
            const conversionRatesResponse = await fetch(conversionRatesApiUrl);
            const conversionRatesData = await conversionRatesResponse.json();

            // Update elements with converted amounts
            const otherCurrenciesContainer = document.getElementById('otherCurrenciesContainer');
            otherCurrenciesContainer.innerHTML = ''; // Clear previous results

            for (const currencyCode in conversionRatesData.results) {
              const convertedAmount = amount * conversionRatesData.results[currencyCode];
              const currencyName = currenciesData.currencies[currencyCode];

              // Create and append elements to the container
              const resultElement = document.createElement('div');
              resultElement.innerHTML = `(${currencyCode})-${currencyName}: <span class="font-bold tx-diamond">${convertedAmount.toFixed(2)}</span>`;
              otherCurrenciesContainer.appendChild(resultElement);
            }
          } catch (error) {
            console.error('Error calling conversion rates API:', error);
          }
        } catch (error) {
          console.error('Error calling conversion API:', error);
        }
      } catch (error) {
        // Hide spinner on error and show alert
        console.error('Error calling conversion API:', error);
        //alert('Failed to convert. Please try again.');
        // spinner.style.display = 'none';
      }
    });

    // Event listener for currency select change
    currencySelects.forEach(select => {
      select.addEventListener('change', async () => {
        try {
          // Show spinner during API call
          // Get selected currencies and update placeholder text
          const fromCurrency = document.getElementById('fromCurrency').value;
          const toCurrency = document.getElementById('toCurrency').value;

          // Update placeholder text based on selected currencies
          const singleCurrencyResponse = await fetch(`https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=1&api_key=554a18ba39-e8eac7597e-s7bta8`);
          const singleCurrencyData = await singleCurrencyResponse.json();
          const singleCurrencyRate = singleCurrencyData.result[toCurrency];
          document.getElementById('resultInput').placeholder = `1 ${fromCurrency} = ${singleCurrencyRate.toFixed(2)} ${toCurrency}`;
        } catch (error) {
          // Hide spinner on error and show alert
          console.error('Error calling conversion API:', error);
          alert('Failed to fetch rates. Please try again.');
        } /*finally {
          // Hide spinner after successful or failed API calls
          spinner.style.display = 'none';
        }*/
      });
    });
  } catch (error) {
    // Log the error details to the console for debugging
    console.error('Error on page load:', error.message, error.stack);
    spinner.style.display = 'block';

    // Alert the user about the error
    alert('Failed to load data. Please reload the page.');
  }
};

function recordConversion(fromCurrency, amount, toCurrency, convertedAmount) {
  const recentConversionContainer = document.getElementById('recentConversion');

  // Create a new row with four columns using the provided template
 
const newRow = document.createElement('tbody');
//newRow.classList.add('flex', 'justify-between', 'mt-5', 'align-center', 'border-t', 'border-gray-300');
      
  newRow.innerHTML = `<tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    ${fromCurrency}
                </th>
                <td class="px-6 py-4">
                    ${amount.toFixed(2)}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    ${toCurrency}
                </td>
                <td class="px-6 py-4">
                    ${convertedAmount.toFixed(2)}
                </td>
            </tr>`;
/*newRow.innerHTML = `
   
      <div>
        <div class="fromCurrency font-light tx-diamond">${fromCurrency}</div>
        
        <div class="fromAmount font-semibold tx-diamond">${amount.toFixed(2)}</div>
      </div>
      <div>
        <div class="toCurrency font-light tx-diamond">${toCurrency}</div>
        <div class="toAmount font-semibold tx-diamond">${convertedAmount.toFixed(2)}</div>
      </div>
    
  `;*/

  // Insert the new row at the beginning (on top)
 // recentConversionContainer.insertBefore(newRow, recentConversionContainer.firstChild);
  recentConversionContainer.prepend(newRow);

}



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
    



const exchangeButton = document.getElementById('exchange');

exchangeButton.addEventListener('click', async () => {
  // Swap values between 'fromCurrency' and 'toCurrency'
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');

  const tempCurrency = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = tempCurrency;

  // Toggle animation class on select tags
  fromCurrencySelect.classList.toggle('swap-animation-y');
  toCurrencySelect.classList.toggle('swap-animation-x');
  
  function swapValues(element1, element2) {
    const tempValue = element1.value;
    element1.value = element2.value;
    element2.value = tempValue;
  }

  // Update placeholder text based on swapped currencies
  const swappedFromCurrency = fromCurrencySelect.value;
  const swappedToCurrency = toCurrencySelect.value;
  
  const singleCurrencyResponse = await fetch(`https://api.fastforex.io/convert?from=${swappedFromCurrency}&to=${swappedToCurrency}&amount=1&api_key=554a18ba39-e8eac7597e-s7bta8`);
  const singleCurrencyData = await singleCurrencyResponse.json();
  const singleCurrencyRate = singleCurrencyData.result[swappedToCurrency];
  document.getElementById('resultInput').placeholder = `1 ${swappedFromCurrency} = ${singleCurrencyRate.toFixed(2)} ${swappedToCurrency}`;
  
  swapValues(swappedFromCurrency, swappedToCurrency)
});

// Remove animation class after the animation completes
document.querySelectorAll('.currency-select').forEach(select => {
  select.addEventListener('transitionend', () => {
    select.classList.remove('swap-animation-y');
        select.classList.remove('swap-animation-x');

  });
});

/*window.onload = async () => {
  try {
    // Show spinner on page load
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    // Fetch all currencies and their names
    const currenciesResponse = await fetch('https://api.fastforex.io/currencies?api_key=554a18ba39-e8eac7597e-s7bta8');
    const currenciesData = await currenciesResponse.json();
    
    const singleCurrencyResponse = await fetch('https://api.fastforex.io/convert?from=USD&to=NGN&amount=1&api_key=554a18ba39-e8eac7597e-s7bta8');
          const singleCurrencyData = await singleCurrencyResponse.json();
          const singleCurrencyRate = singleCurrencyData.result.NGN;
          document.getElementById('resultInput').placeholder = `1 USD = ${singleCurrencyRate.toFixed(2)} NGN`;

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

    // Hide spinner after successful currencies API response
    spinner.style.display = 'none';

    // Event listener for the convert button
    const convertButton = document.getElementById('convertButton');
    convertButton.addEventListener('click', async () => {
      try {
        // Show spinner during API call
      //  spinner.style.display = 'block';

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
        const conversionApiUrl = `https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&api_key=554a18ba39-e8eac7597e-s7bta8`;

        try {
          const conversionApiResponse = await fetch(conversionApiUrl);
          const conversionApiData = await conversionApiResponse.json();

          // Calculate converted amount
          const convertedAmount = conversionApiData.result[toCurrency];

          // Display the result in the second input
          document.getElementById('resultInput').value = convertedAmount.toFixed(2);

          // Fetch conversion rates for all currencies
          const conversionRatesApiUrl = `https://api.fastforex.io/fetch-all?from=${fromCurrency}&api_key=554a18ba39-e8eac7597e-s7bta8`;

          try {
            const conversionRatesResponse = await fetch(conversionRatesApiUrl);
            const conversionRatesData = await conversionRatesResponse.json();

            // Update elements with converted amounts
            const otherCurrenciesContainer = document.getElementById('otherCurrenciesContainer');
            otherCurrenciesContainer.innerHTML = ''; // Clear previous results

            for (const currencyCode in conversionRatesData.results) {
              const convertedAmount = amount * conversionRatesData.results[currencyCode];
              const currencyName = currenciesData.currencies[currencyCode];

              // Create and append elements to the container
              const resultElement = document.createElement('div');
              resultElement.innerHTML = `(${currencyCode})-${currencyName}: <span class="font-bold tx-diamond">${convertedAmount.toFixed(2)}</span>`;
              otherCurrenciesContainer.appendChild(resultElement);
            }
          } catch (error) {
            console.error('Error calling conversion rates API:', error);
          }
        } catch (error) {
          console.error('Error calling conversion API:', error);
        } /
      } catch (error) {
        // Hide spinner on error and show alert
        console.error('Error calling conversion API:', error);
        alert('Failed to convert. Please try again.');
       // spinner.style.display = 'none';
      }
    });

    // Event listener for currency select change
    currencySelects.forEach(select => {
      select.addEventListener('change', async () => {
        try {
          // Show spinner during API call
        //  spinner.style.display = 'block';

          // Get selected currencies and update placeholder text
          const fromCurrency = document.getElementById('fromCurrency').value;
          const toCurrency = document.getElementById('toCurrency').value;

          // Update placeholder text based on selected currencies
          const singleCurrencyResponse = await fetch(`https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=1&api_key=554a18ba39-e8eac7597e-s7bta8`);
          const singleCurrencyData = await singleCurrencyResponse.json();
          const singleCurrencyRate = singleCurrencyData.result[toCurrency];
          document.getElementById('resultInput').placeholder = `1 ${fromCurrency} = ${singleCurrencyRate.toFixed(2)} ${toCurrency}`;
        } catch (error) {
          // Hide spinner on error and show alert
          console.error('Error calling conversion API:', error);
          alert('Failed to fetch rates. Please try again.');
        } 
     });
    });
  } catch (error) {
    // Hide spinner on error and show alert
    console.error('Error on page load:', error);
    //alert('Failed to load data. Please reload the page.');
    spinner.style.display = 'block';
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
    



const exchangeButton = document.getElementById('exchange');

exchangeButton.addEventListener('click', async () => {
  // Swap values between 'fromCurrency' and 'toCurrency'
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');

  const tempCurrency = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = tempCurrency;

  // Toggle animation class on select tags
  fromCurrencySelect.classList.toggle('swap-animation-y');
  toCurrencySelect.classList.toggle('swap-animation-x');
  
  function swapValues(element1, element2) {
    const tempValue = element1.value;
    element1.value = element2.value;
    element2.value = tempValue;
  }

  // Update placeholder text based on swapped currencies
  const swappedFromCurrency = fromCurrencySelect.value;
  const swappedToCurrency = toCurrencySelect.value;
  
  const singleCurrencyResponse = await fetch(`https://api.fastforex.io/convert?from=${swappedFromCurrency}&to=${swappedToCurrency}&amount=1&api_key=554a18ba39-e8eac7597e-s7bta8`);
  const singleCurrencyData = await singleCurrencyResponse.json();
  const singleCurrencyRate = singleCurrencyData.result[swappedToCurrency];
  document.getElementById('resultInput').placeholder = `1 ${swappedFromCurrency} = ${singleCurrencyRate.toFixed(2)} ${swappedToCurrency}`;
  
  swapValues(swappedFromCurrency, swappedToCurrency)
});

// Remove animation class after the animation completes
document.querySelectorAll('.currency-select').forEach(select => {
  select.addEventListener('transitionend', () => {
    select.classList.remove('swap-animation-y');
        select.classList.remove('swap-animation-x');

  });
});


/*  let display = document.getElementById('display');
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


const exchangeButton = document.getElementById('exchange');

exchangeButton.addEventListener('click', async () => {
  // Swap values between 'fromCurrency' and 'toCurrency'
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');

  const tempCurrency = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = tempCurrency;

  // Toggle animation class on select tags
  fromCurrencySelect.classList.toggle('swap-animation-y');
  toCurrencySelect.classList.toggle('swap-animation-x');

  // Update placeholder text based on swapped currencies
  const swappedFromCurrency = fromCurrencySelect.value;
  const swappedToCurrency = toCurrencySelect.value;
  
  const singleCurrencyResponse = await fetch(`https://api.fastforex.io/convert?from=${swappedFromCurrency}&to=${swappedToCurrency}&amount=1&api_key=554a18ba39-e8eac7597e-s7bta8`);
  const singleCurrencyData = await singleCurrencyResponse.json();
  const singleCurrencyRate = singleCurrencyData.result[swappedToCurrency];
  document.getElementById('resultInput').placeholder = `1 ${swappedFromCurrency} = ${singleCurrencyRate.toFixed(2)} ${swappedToCurrency}`;
  
  swapValues(swappedFromCurrency, swappedToCurrency)
});

// Remove animation class after the animation completes
document.querySelectorAll('.currency-select').forEach(select => {
  select.addEventListener('transitionend', () => {
    select.classList.remove('swap-animation-y');
        select.classList.remove('swap-animation-x');

  });
});



   /* // Swap values between 'from' and 'to' select elements
    swapValues(fromCurrencySelect, toCurrencySelect);

    // Swap values between 'from' and 'to' amount input elements
    swapValues(fromAmountInput, toAmountInput);
  });*/
  
  
   // JavaScript code for adding the functionality to the calculator
    // Get the calculator element
    /*const calculator = document.querySelector('.calculator');

    // Get the display element
    const output = calculator.querySelector('.calculator__output');

    // Get all the keys
    const keys = calculator.querySelectorAll('.calculator__key');

    // Listen for clicks on the keys
    keys.forEach(key => {
      key.addEventListener('click', event => {
        // Get the clicked key
        const key = event.target;

        // Get the data-action attribute of the key
        const action = key.dataset.action;

        // Get the current displayed number
        const displayedNum = output.textContent;

        // Get the previous key pressed
        const previousKeyType = calculator.dataset.previousKeyType;

        // If the key is a number key
        if (!action) {
          // If the display shows 0 or the previous key was an operator or equal key, replace the display with the clicked number
          if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
            output.textContent = key.textContent;
          } else {
            // Otherwise, append the clicked number to the display
            output.textContent = displayedNum + key.textContent;
          }
          // Update the previous key type
          calculator.dataset.previousKeyType = 'number';
        }

        // If the key is a decimal key
        if (action === 'decimal') {
          // If the display does not contain a decimal point, append a decimal point
          if (!displayedNum.includes('.')) {
            output.textContent = displayedNum + '.';
          }
          // If the previous key was an operator or equal key, replace the display with '0.'
          if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
            output.textContent = '0.';
          }
          // Update the previous key type
          calculator.dataset.previousKeyType = 'decimal';
        }

        // If the key is an operator key
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
          // Get the first operand
          const firstValue = calculator.dataset.firstValue;

          // Get the operator
          const operator = calculator.dataset.operator;

          // Get the second operand
          const secondValue = displayedNum;

          // If the first operand and operator exist and the previous key was not an operator or equal key, calculate the result
          if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
            // Perform the calculation
            const result = calculate(firstValue, operator, secondValue);

            // Display the result
            output.textContent = result;

            // Update the first operand with the result
            calculator.dataset.firstValue = result;
          } else {
            // Otherwise, update the first operand with the current displayed number
            calculator.dataset.firstValue = displayedNum;
          }

          // Update the previous key type
          calculator.dataset.previousKeyType = 'operator';

          // Update the operator
          calculator.dataset.operator = action;
        }

        // If the key is an equal key
        if (action === 'calculate') {
          // Get the first operand
          const firstValue = calculator.dataset.firstValue;

          // Get the operator
          const operator = calculator.dataset.operator;

          // Get the second operand
          const secondValue = displayedNum;

          // If the first operand, operator and second operand exist, perform the calculation
          if (firstValue && operator && secondValue) {
            // Perform the calculation
            const result = calculate(firstValue, operator, secondValue);

            // Display the result
            output.textContent = result;

            // Update the first operand with the result
            calculator.dataset.firstValue = result;
          }

          // Update the previous key type
          calculator.dataset.previousKeyType = 'calculate';
        }

        // If the key is a clear key
        if (action === 'clear') {
          // Reset the calculator
          resetCalculator();
        }
      });
    });

    // Define a function to perform the calculation
    function calculate(firstValue, operator, secondValue) {
      // Convert the string values to numbers
      firstValue = parseFloat(firstValue);
      secondValue = parseFloat(secondValue);

      // Perform the calculation based on the operator
      switch (operator) {
        case 'add':
          return firstValue + secondValue;
        case 'subtract':
          return firstValue - secondValue;
        case 'multiply':
          return firstValue * secondValue;
        case 'divide':
          return firstValue / secondValue;
      }
    }

    // Define a function to reset the calculator
    function resetCalculator() {
      // Reset the display to 0
      output.textContent = '0';

      // Remove the data attributes
      calculator.dataset.firstValue = '';
      calculator.dataset.operator = '';
      calculator.dataset.previousKeyType = '';
    }
  
  */
  
  const calculator = document.querySelector('.calculator');
const output = calculator.querySelector('#input');
const preview = calculator.querySelector('#preview');
const keys = calculator.querySelectorAll('.calculator__key');


keys.forEach(key => {
    key.addEventListener('click', event => {
        const clickedKey = event.target;
        const action = clickedKey.dataset.action;
        const displayedNum = output.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action || action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            output.textContent += clickedKey.textContent;
            preview.textContent += clickedKey.innerHTML;
            calculator.dataset.previousKeyType = 'number';
        }

        if (action === 'clear') {
            resetCalculator();
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                output.textContent += '.';
                preview.textContent += '.';
            }
            if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                output.textContent = '0.';
                preview.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }

        if (action === 'calculate') {
            const match = displayedNum.match(/^(\d+)\s*([+\-*/])\s*(\d+)$/);

            if (match) {
                const firstValue = parseFloat(match[1]);
                const operator = match[2];
                const secondValue = parseFloat(match[3]);

                const result = calculate(firstValue, operator, secondValue);

                output.textContent = result;
                preview.textContent = '';

                calculator.dataset.previousKeyType = 'calculate';
            }
        }
    });
});

function calculate(firstValue, operator, secondValue) {
    switch (operator) {
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case 'x':
            return firstValue * secondValue;
        case '÷':
            return secondValue !== 0 ? firstValue / secondValue : "Error: Division by zero";
        default:
            return "Error: Unknown operator";
    }
}

function resetCalculator() {
    output.textContent = '0';
    preview.textContent = '';
    calculator.dataset.previousKeyType = '';
}


    
const backDelete = () => {
  const output = calculator.querySelector('#input');
  const preview = calculator.querySelector('#preview');
      output.innerHTML = output.innerHTML.slice(0, -1);
      preview.innerHTML = output.innerHTML;
      
      console.log(output)
      //periodClicked = false; // Reset periodClicked when backspacing
    }
    
    document.getElementById('deleteNum').addEventListener('click', backDelete);
    
    

/*function calculate(firstValue, operator, secondValue) {
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    switch (operator) {
        case 'add':
            return firstValue + secondValue;
        case 'subtract':
            return firstValue - secondValue;
        case 'multiply':
            return firstValue * secondValue;
        case 'divide':
            return firstValue / secondValue;
    }
}*/

/*function resetCalculator() {
    output.innerHTML = '0';
    preview.innerHTML = '0'
    calculator.dataset.firstValue = '';
    calculator.dataset.operator = '';
    calculator.dataset.previousKeyType = '';
}*/


