import React, { useState } from 'react';

const FixedDepositCalculator = () => {
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [years, setYears] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [calculatedAmount, setCalculatedAmount] = useState(0);

  const calculate = () => {
    if (years < 2) {
      setInterestRate(2);
    } else {
      setInterestRate(4);
    }
    const interest = (principalAmount * years * interestRate) / 100;
    setCalculatedAmount(principalAmount + interest);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Fixed Deposit</h2>

      <div>
        <label htmlFor="principalAmount">Enter Principal Amount:</label>
        <input
          type="number"
          id="principalAmount"
          value={principalAmount}
          onChange={(e) => setPrincipalAmount(parseInt(e.target.value))}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label htmlFor="years">Enter Number of Years for Fixed Deposit:</label>
        <input
          type="number"
          id="years"
          value={years}
          onChange={(e) => setYears(parseInt(e.target.value))}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <p>
          Interest Rate: {years < 2 ? '2%' : '4%'}
        </p>
      </div>

      <button style={{ marginTop: '10px' }} onClick={calculate}>Calculate</button>

      <div style={{ marginTop: '10px' }}>
        <p>Calculated Amount: {calculatedAmount}</p>
      </div>
    </div>
  );
};

export default FixedDepositCalculator;
