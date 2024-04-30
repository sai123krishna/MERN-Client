import React, { useState, useEffect } from 'react';
import Login from './Login';
import Binterface from './Binterface';
import BankInformation from './BankInformation';
import WithdrawalMoney from './WithdrawalMoney';
import QRCodeGenerator from './QRCodeGenerator';
import BankInfoDetails from './BankInfoDetails';
import FixedDepositCalculator from './FixedDepositCalculator';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cif, setCif] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [totalAmount, setTotalAmount] = useState(1000000);
  const [dailyLimit, setDailyLimit] = useState(5000);
  const [userEmail, setUserEmail] = useState('');

  const handleTransfer = (option, recipientId, amount) => {
    // Your logic to process the transfer goes here
    console.log('Transfer initiated:', option, recipientId, amount);
    // For example, you can implement an API call or perform other actions
    updateBankInformation(amount);
  };

  const updateBankInformation = (amount) => {
    // Update totalAmount based on the transferred amount
    setTotalAmount((prevTotalAmount) => prevTotalAmount - amount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDay((prevIsDay) => !prevIsDay);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    setCif(generateRandomNumber());
    setAccountNumber(generateRandomNumber());
    setUserEmail('example@example.com'); // Set the user's email here
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const [isDay, setIsDay] = useState(true);

  return (
    <div className={`App ${isDay ? 'day' : 'night'}`}> {/* Template literal used here */}
      <div id="sun" className={isDay ? 'visible' : 'hidden'}></div>
      <div id="moon" className={!isDay ? 'visible' : 'hidden'}></div>
      <div>
        <server /> {/* Not sure what this is meant to be */}
        <Binterface />
        {loggedIn ? (
          <>
            <BankInformation
              cif={cif}
              accountNumber={accountNumber}
              totalAmount={totalAmount}
              dailyLimit={dailyLimit}
              userEmail={userEmail}
              updateBankInformation={updateBankInformation}
            />
            <BankInfoDetails />
            <WithdrawalMoney
              onTransfer={handleTransfer}
              updateBankInformation={updateBankInformation}
            />
            <FixedDepositCalculator/>
            <QRCodeGenerator />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
