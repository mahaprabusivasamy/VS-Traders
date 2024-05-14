import React from 'react'
import Header from '../Connections/Header'
import ImageSlider from '../Components/ImageSlider'

import slide from '../assets/breeds/prawn.jpg'
import TextHead from '../Components/TextHead'
import About from '../Components/About'
import Footer from '../Components/Footer'

const array=[{
  "id":"1",
  "image":slide,

},
{
  "id":"2",
  "image":slide,

},
{
  "id":"3",
  "image":slide,

}]
const images=[
  slide,
  slide,
  slide
]
export default function Home() {
  return (
   <>
   <Header/>
   {/* <h1>Home</h1> */}
   {/* {array.map((data) => (
        <div key={data.id} id={data.id} className="div">
          <ImageSlider img={data.img} />
        </div>
      ))} */}
      <ImageSlider/>   

      {/* about us */}
      <TextHead name={'About us'}/>
      <About/>


    <Footer/>
   </>
  )
}
