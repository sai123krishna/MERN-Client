function calculateFixedDeposit() {
    const principal = parseFloat(document.getElementById('principal').value);
    const years = parseFloat(document.getElementById('years').value);
    let interestRate;

    // Checking the number of years to determine the interest rate
    if (years >= 2) {
        interestRate = 4; // 4% interest for 2 or more years
    } else {
        interestRate = 2; // 2% interest for less than 2 years
    }

    const maturity = calculateMaturity(principal, interestRate, years);

    document.getElementById('result').innerHTML = "Maturity Amount after " + years + " years: " + maturity;
}

function calculateMaturity(principal, interestRate, years) {
    interestRate = interestRate / 100;
    let interest = principal * interestRate * years;
    let maturityAmount = principal + interest;
    return maturityAmount;
}

// Create a container
const container = document.createElement('div');
container.setAttribute('id', 'fixed-deposit-container');
document.body.appendChild(container);

// Heading for Fixed Deposit
const heading = document.createElement('h2');
heading.textContent = 'Fixed Deposit';
container.appendChild(heading);

// Create input boxes inside the container
const principalInput = document.createElement('input');
principalInput.setAttribute('type', 'number');
principalInput.setAttribute('id', 'principal');
principalInput.setAttribute('placeholder', 'Enter principal amount');
container.appendChild(principalInput);

const yearsInput = document.createElement('input');
yearsInput.setAttribute('type', 'number');
yearsInput.setAttribute('id', 'years');
yearsInput.setAttribute('placeholder', 'Enter number of years');
container.appendChild(yearsInput);

// Create a button inside the container
const calculateButton = document.createElement('button');
calculateButton.textContent = 'Calculate';
calculateButton.addEventListener('click', calculateFixedDeposit);
container.appendChild(calculateButton);

// Create a div to display the result
const resultDiv = document.createElement('div');
resultDiv.setAttribute('id', 'result');
container.appendChild(resultDiv);

// Display limited-time offer message
const limitedOffer = document.createElement('p');
limitedOffer.textContent = 'Limited period offer: Lower interest rate';
container.appendChild(limitedOffer);

// To ensure the elements are created on page load, call calculateFixedDeposit
export default calculateFixedDeposit();
