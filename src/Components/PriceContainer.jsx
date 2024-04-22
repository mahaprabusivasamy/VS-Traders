import React from 'react';
import './Style.css';

export default function PriceContainer(props) {
  // Function to get the current day in the format "Monday", "Tuesday", etc.
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    return days[currentDate.getDay()];
  };

  // Function to format the current date as "MM/DD/YYYY"
  const getCurrentDate = () => {
    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <>
      <div className="priceContainer">
        <div className="date">
          <p>Date: {getCurrentDate()} Day: {getCurrentDay()}</p>
        </div>
        <div className="price">
          <div className="var">
            <h1>{props.name1}</h1>
            <p className='pprice'>₹{props.price1} / KG</p>
            <div className="highlow">
              <p>high : ₹{props.high1}</p>
              <p>Low : ₹{props.low1}</p>
            </div>
          </div>
          <div className="var">
            <h1>{props.name2}</h1>
            <p className='pprice'>₹{props.price2} / KG</p>
            <div className="highlow">
              <p>high :₹{props.high2}</p>
              <p>Low : ₹{props.low2}</p>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}
