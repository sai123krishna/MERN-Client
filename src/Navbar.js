import React from 'react';

const Navbar = ({ onNavClick, onLogout }) => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Align items at the ends of the container
    alignItems: 'center', // Center items vertically
    backgroundColor: 'blue',
    padding: '10px 20px', // Add padding for spacing
    borderRadius: '8px',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'blue',
    border: '1px solid blue',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const anyaBankStyle = {
    fontSize: '24px', // Adjust the font size as needed
    fontWeight: 'bold', // Apply bold style
    color: 'white', // Text color
  };

  return (
    <div style={navbarStyle}>
      <div style={anyaBankStyle}>Anya Bank</div> {/* Centered "Anya Bank" */}
      <div>
        <button
          style={buttonStyle}
          onClick={() => onNavClick('home')}
        >
          Home
        </button>
        <button
          style={buttonStyle}
          onClick={() => onNavClick('moneyTransfer')}
        >
          Money Transfer
        </button>
        <button
          style={buttonStyle}
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;