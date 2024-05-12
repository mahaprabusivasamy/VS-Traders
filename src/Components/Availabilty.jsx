import React from 'react';
import './Style.css';

export default function Availabilty(props) {
 
  const getCurrentTime = () => {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  
  const isTimeInRange = (startTime, endTime) => {
    const currentTime = getCurrentTime();
    return currentTime >= startTime && currentTime <= endTime;
  };
  const msg='avalilable'
  return (
    <>
      <div className="availabilty">
        <div className="box">
          <p>Availabity</p>
          <ul>
            
            <li className={isTimeInRange('05:00', '07:00') ? 'livetime' : ''}>5-7 Am - {isTimeInRange('05:00', '07:00')?msg:props.avail}</li>
            <li className={isTimeInRange('07:00', '10:00') ? 'livetime' : ''}>7-10 Am - {isTimeInRange('07:00', '10:00')?msg:props.avail}</li>
            <li className={isTimeInRange('10:00', '11:59') ? 'livetime' : ''}>10-11:59 AM -{isTimeInRange('10:00', '12:00')?msg:props.avail}</li>
            <li className={isTimeInRange('12:00', '15:00') ? 'livetime' : ''}>12-3 pm -{isTimeInRange('12:00', '15:00')?msg:props.avail}</li>
            <li className={isTimeInRange('15:00', '17:00') ? 'livetime' : ''}>3-5 Pm - {isTimeInRange('15:00', '17:00')?msg:props.avail}</li>
            <li className={isTimeInRange('17:00', '20:00') ? 'livetime' : ''}>5-8 Pm - {isTimeInRange('17:00', '20:00')?msg:props.avail}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
