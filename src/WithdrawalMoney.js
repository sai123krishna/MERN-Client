import React, { useState } from 'react';
import axios from 'axios';

const WithdrawalMoney = ({ updateBankInformation, dailyLimit }) => {
  const [transferAmount, setTransferAmount] = useState(0);
  const [recipientAccountNumber, setRecipientAccountNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isAmountError, setIsAmountError] = useState(false);
  const [isAccountNumberError, setIsAccountNumberError] = useState(false);
  const [totalTransferredToday, setTotalTransferredToday] = useState(0);
  const [withdrawalReceipt, setWithdrawalReceipt] = useState('');

  const handleTransfer = async () => {
    setIsAmountError(false);
    setIsAccountNumberError(false);

    // Validate the transfer amount
    if (transferAmount <= 0) {
      setIsAmountError(true);
      return;
    }

    // Validate the recipient account number
    if (!isValidAccountNumber(recipientAccountNumber)) {
      setIsAccountNumberError(true);
      return;
    }

    try {
      // Check if transfer amount exceeds daily limit
      if (transferAmount + totalTransferredToday <= dailyLimit) {
        // Perform the transfer
        const response = await axios.post('http://localhost:5000/api/transfer', {
          recipientAccountNumber,
          transferAmount,
        });

        // Update bank information after successful transfer
        updateBankInformation(transferAmount);

        // Generate withdrawal receipt
        const receipt = generateReceipt(response.data);

        // Update total transferred amount for the day
        setTotalTransferredToday(totalTransferredToday + transferAmount < dailyLimit);

        // Display success message
        setSuccessMessage('Money transferred successfully');

        // Set withdrawal receipt
        setWithdrawalReceipt(receipt);
      } else {
        // Display message if transfer amount exceeds daily limit
        setSuccessMessage('Money transfer daily limit exceeded');
      }
    } catch (error) {
      console.error('Transfer failed:', error);
      // Handle transfer failure
      // You can display an error message or handle it as per your application's requirements
    }
  };

  // Function to validate the recipient account number
  const isValidAccountNumber = (accountNumber) => {
    // Implement your validation logic here
    // For example, check if the account number format is correct
    // Return true if valid, false otherwise
    return true;
  };

  // Function to generate withdrawal receipt
  const generateReceipt = (transferData) => {
    // Implement logic to generate the withdrawal receipt based on transferData
    // Return the receipt as a formatted string
    return 'Withdrawal Receipt:\nRecipient Account Number: ' + transferData.recipientAccountNumber +
           '\nAmount: ' + transferData.transferAmount +
           '\nTimestamp: ' + new Date().toString();
  };

  return (
    <div>
      <h2>TRANSFER MONEY</h2>
      <label>Recipient Account Number:</label>
      <input
        type="text"
        value={recipientAccountNumber}
        onChange={(e) => setRecipientAccountNumber(e.target.value)}
      />
      {isAccountNumberError && <div style={{ color: 'red' }}>Invalid account number</div>}
      <label>Amount:</label>
      <input
        type="number"
        value={transferAmount}
        onChange={(e) => setTransferAmount(parseInt(e.target.value))}
      />
      {isAmountError && <div style={{ color: 'red' }}>Amount must be greater than zero</div>}
      <button onClick={handleTransfer}>Transfer</button>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {withdrawalReceipt && (
        <div>
          <h3>Withdrawal Receipt:</h3>
          <pre>{withdrawalReceipt}</pre>
        </div>
      )}
    </div>
  );
};

export default WithdrawalMoney;
