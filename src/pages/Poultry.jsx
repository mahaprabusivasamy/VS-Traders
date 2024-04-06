import React from 'react'
import Header from '../Connections/Header'
import Image1 from '../Components/Image1'
import Poultr from '../assets/chicken.jpg'
import PriceContainer from '../Components/PriceContainer'
import './Cs.css'
import Quotes from '../Components/Quotes'
import TextHead from '../Components/TextHead'
import ImgPara from '../Components/ImgPara'

import countryhen from '../assets/breeds/country_hen.jpg'
import broiler from '../assets/breeds/broiler.jpg'
import Availabilty from '../Components/Availabilty'

export default function Poultry() {
  return (
   <>
   <Header/>
   {/* image and price */}
   <div className="Muttoncontainer">
   <div className="container1">
   <Image1 pic={Poultr}/></div>
   <PriceContainer name1={'Country Hen'} price1={'800'} low1={'599'} high1={'900'} name2={'Broiler'} price2={'240'} low2={'199'} high2={'259'}/>
   <Availabilty/>

   
      </div>

      {/* quote */}
      <div className="quote">
     <Quotes text={'In a world full of birds, be a chicken—because everyone loves chicken.'}/>
      </div>
     {/* breeds */}
     <TextHead name={'Breed'}/>

     <ImgPara
     t1={"Country hen"}
     para1={", also known as free-range chicken, offers a distinct flavor and texture compared to conventionally raised poultry. Raised in open spaces with access to natural vegetation and sunlight, country hens lead a more natural lifestyle, resulting in meat that is flavorful and succulent. The meat of country hens is prized for its rich taste and firm texture, making it a favorite among culinary enthusiasts seeking high-quality poultry. Compared to commercial chicken breeds, country hens often have a more robust flavor profile due to their varied diet and active lifestyle. Additionally, country hen meat is generally leaner and contains higher levels of essential nutrients such as protein, vitamins, and minerals. Its natural upbringing and superior taste make country hen meat an excellent choice for those looking to elevate their culinary experiences while enjoying the health benefits of wholesome, ethically sourced poultry."}
     img1={countryhen}
     
     t2={"Broiler "}
     para2={"meat, derived from chickens raised specifically for meat production, is widely consumed worldwide for its convenience, affordability, and versatility. Broiler chickens are bred and raised in controlled environments optimized for rapid growth and efficient meat production. As a result, broiler meat is characterized by its tender texture and mild flavor, making it a versatile ingredient in various culinary dishes. While broiler meat may lack the depth of flavor associated with country hen or free-range chicken, it remains a popular choice for its convenience and accessibility. Additionally, broiler meat is a rich source of high-quality protein, essential amino acids, vitamins, and minerals. Its lean profile and nutritional value make it a staple protein source for many households and a practical option for meeting daily dietary requirements. Incorporating broiler meat into balanced meal plans offers a convenient way to enjoy delicious, nutritious poultry while accommodating busy lifestyles and diverse culinary preferences."}
     img2={broiler}
     />
   </>
  )
}
