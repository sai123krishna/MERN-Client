import React from 'react';

const BankInformation = ({ cif, accountNumber, totalAmount, dailyLimit, userEmail, updateTotalAmount }) => {
  const bankInfoStyle = {
    backgroundColor: '',
    padding: '30px',
    borderRadius: '8px',
    width: '100%',
    height: '50vh',
    backgroundSize: 'cover',
    overflow: 'hidden',
    color: 'white', // Adding text color style
  };

  return (
    <div style={bankInfoStyle}>
      <h2>Bank Information</h2>
      <p>IFSC Code: ABCD1234567</p>
      <p>Email: krishnabank@example.com</p>
      <p><strong>Bank Name:</strong> krishna Bank</p> {/* Changed Bank Name heading */}
      <p>Area: INDIA</p>
      <p>Total Amount in Bank: {totalAmount}</p>
      <p>Daily Limit: {dailyLimit}</p>
      <p>CIF: {cif}</p>
      <p>Account Number: {accountNumber}</p>
      <p>User Email: {userEmail}</p> {/* Changed to display userEmail dynamically */}
    </div>
  );
};

export default BankInformation;
