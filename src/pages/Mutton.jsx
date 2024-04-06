import React from 'react'
import Header from '../Connections/Header'
import Image1 from '../Components/Image1'
import Goat from '../assets/goat.jpg'
import './Cs.css'
import PriceContainer from '../Components/PriceContainer'
import Quotes from '../Components/Quotes'
import TextHead from '../Components/TextHead'
import ImgPara from '../Components/ImgPara'

import ggoat from '../assets/breeds/goat.jpg'
import sheep from '../assets/breeds/sheep.jpg'
import Availabilty from '../Components/Availabilty'

export default function Mutton() {
  return (
   <>
   <Header/>
   
   {/* image & price */}
   <div className="Muttoncontainer">
    <div className="image">
   <Image1 pic={Goat} /></div>
    
    <PriceContainer name1={'Goat'} price1={'799'} low1={'599'} high1={'809'} name2={'Sheap'} price2={'740'} low2={'599'} high2={'809'}/>
    <Availabilty/>
      </div>

      {/* quotes */}
      <div className="quote">
      <Quotes text={'Life is too short not to enjoy a perfectly cooked piece of mutton.'}/>
      </div>
     
    
     {/* breads */}
     <TextHead name={'Breed'}/>

     <ImgPara
     t1={"Goat"}
     para1={"meat, also known as mutton or chevon, offers a unique culinary experience with its rich, slightly gamey flavor. Commonly likened to lamb but with a milder taste, goat meat is prized for its versatility in various cuisines worldwide. Notably leaner than many other meats, goat provides a healthier alternative for those seeking to reduce their fat intake. Its higher protein concentration makes it an excellent source of essential amino acids necessary for muscle growth and repair. Moreover, goat meat is packed with essential nutrients such as iron, zinc, vitamin B12, and selenium, contributing to overall health and well-being. Its ease of digestion also makes it a favorable option for individuals with sensitive stomachs or dietary restrictions."}
     img1={ggoat}

     t2={"Sheep"}
     para2={"meat, commonly known as lamb or mutton, boasts a tender texture and rich flavor profile that adds depth to culinary creations. Recognized for its succulent taste and versatility, lamb is a staple in many cuisines worldwide. A standout feature of sheep meat is its high-quality protein content, making it an excellent choice for those seeking to support muscle health and overall wellness. Additionally, lamb is a rich source of heme iron, a highly absorbable form of iron crucial for oxygen transport in the body and preventing anemia. Alongside essential B vitamins such as vitamin B12, riboflavin, and niacin, sheep meat also contains conjugated linoleic acid (CLA), a fatty acid associated with various health benefits including improved heart health and metabolism regulation. Incorporating lamb into your diet not only enhances culinary diversity but also delivers a wealth of essential nutrients essential for optimal health."}
     img2={sheep}
     />
     

     


   </>
  )
}
