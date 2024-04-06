import React from 'react'
import './Style.css'
export default function PriceContainer(props) {
  return (
   <>
   
   <div className="priceContainer">
       <div className="date">
        <p>Date:04/04/2024 DAY:TuesDay </p>
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
  )
}
