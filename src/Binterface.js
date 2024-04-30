import React from 'react';

function Binterface() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh',
    background: 'blue',
  };

  const headingStyle = {
    textAlign: 'center',
    color: 'lightblue', // Set the heading color to light blue
    fontWeight: 'bold', // Make the heading text bold
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>KRISHNA BANK</h1>
    </div>
  );
}

export default Binterface;
