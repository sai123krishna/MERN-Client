import React, { useState, useEffect } from 'react';

const BankInfoDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const images = ['b1.jpeg', 'b2.jpeg', 'b3.jpeg']; // Replace with your image URLs

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    let intervalId;
    if (showDetails) {
      intervalId = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    } else {
      clearInterval(intervalId);
    }
  
    return () => clearInterval(intervalId);
  }, [showDetails, images.length]);
  

  const imageStyle = {
    width: '300px', // Adjust the size as needed
    height: '300px', // Adjust the size as needed
  };

  return (
    <div className="bank-info-details">
      <h2 style={{ textAlign: 'center' }}>Bank Details</h2>
      {showDetails ? (
        <>
          <img
               src={images[imageIndex]}
               alt={`Bank ${imageIndex + 1}`}
               style={imageStyle}
          />

          <p>
            Ram Bank is a reputable financial institution offering a comprehensive range of banking services to cater to the needs of both individuals and businesses. With a strong commitment to customer satisfaction, Ram Bank has established itself as a reliable and customer-centric banking solution.
          </p>
          <p>
            Loans and Mortgages: Ram Bank offers various loan options, including personal loans, auto loans, and home mortgages, enabling customers to realize their financial aspirations.
          </p>
          <button onClick={toggleDetails} style={{ display: 'block', margin: 'auto' }}>
            Close
          </button>
        </>
      ) : (
        <button onClick={toggleDetails} style={{ display: 'block', margin: 'auto' }}>
          Info
        </button>
      )}
    </div>
  );
};

export default BankInfoDetails;
