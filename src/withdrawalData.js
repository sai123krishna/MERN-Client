// withdrawalData.js

// Withdrawal Data Management
const withdrawalData = [];

const addWithdrawalData = (withdrawalDetails) => {
  withdrawalData.push(withdrawalDetails);
};

const getWithdrawalDataText = () => {
  return withdrawalData.map((withdrawalDetail, index) => {
    return `Withdrawal ${index + 1}:\nRecipient: ${withdrawalDetail.recipientId}\nAmount: ${withdrawalDetail.transferAmount}\nUPI ID: ${withdrawalDetail.upiId}\nTimestamp: ${withdrawalDetail.timestamp}\n\n`;
  }).join('');
};

// WithdrawalMoney Component
const WithdrawalMoney = ({ onTransfer, updateBankInformation }) => {
  // ... (rest of your component code)
}
