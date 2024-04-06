import React from 'react'
import './Style.css'

export default function Availabilty() {
  return (
   <>
  <div className="availabilty">
    <div className="box">
        <p>Availabity</p>
        <ul>
            <li>5-7 Am - available</li>
            <li>7-10 Am - available</li>
            <li>10-11:59 AM - available</li>
            <li><span className='livetime'>12-3 pm - available</span></li>
            <li>3-5 Pm - available</li>
            <li>5-8 Pm - available</li>
            <li></li>
        </ul>
    </div>
  </div>
   </>
  )
}
