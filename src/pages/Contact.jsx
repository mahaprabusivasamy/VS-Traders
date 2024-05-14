import React from 'react'
import Header from '../Connections/Header'
import Map from '../Components/Map'
import ConatctInfo from '../Components/ConatctInfo'
import './Cs.css'
import Feedback from '../Components/Feedback'
import Footer from '../Components/Footer'
export default function Contact() {
  return (
    <>
   
    <div className='contact'>
    <Header/>
      <h1>CONTACT DETAILS</h1>
      <div className="contact-container">
         <ConatctInfo/>
         <div className="map">
         <Map/>
         </div>
      </div>
    </div>
    <Feedback/>
    <Footer/>
    </>
  )
}
