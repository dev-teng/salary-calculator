function calculateValues() {
  // Get input values and convert them to numbers
  const inputTotalLate = document.querySelector('.total-late-js');
  const totalLate = Number(inputTotalLate.value);

  const inputHoursRendered = document.querySelector('.hours-rendered-js');
  const hoursRendered = Number(inputHoursRendered.value);

  // Perform calculations
  const number = 60;
  const calculationOne = totalLate / number;
  const calculationTwo = hoursRendered - calculationOne;
  const decimal = calculationTwo.toFixed(2); // Format result to 2 decimal places

  if (calculationTwo <= 0) {
      alert('No data Detected')
      return;
  }

  // Display the first result
  document.querySelector('.visible-js').innerHTML = decimal;
  document.querySelector('.visible-js').classList.add('is-visible');

  // Calculate salary and format it
  const salaryPerHour = 119.68;
  let salary = decimal * salaryPerHour;
  salary = salary.toFixed(2); // Ensure salary is a string with 2 decimal places

  // Format salary with commas for thousands
  const formattedNumber = Number(salary).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Display the formatted salary
  document.querySelector('.visibleTwo-js').innerHTML = formattedNumber;
  document.querySelector('.visibleTwo-js').classList.add('is-visibleTwo');
};

// Button click event
document.querySelector('.calculate-js').addEventListener('click', calculateValues);

// Keydown event
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
      calculateValues();
  }

});