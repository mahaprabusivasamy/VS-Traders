// import React, { useState, useEffect } from 'react';
// import Header from '../Connections/Header';
// import Image1 from '../Components/Image1';
// import Goat from '../assets/goat1.jpg';
// import './Cs.css';
// import PriceContainer from '../Components/PriceContainer';
// import Quotes from '../Components/Quotes';
// import TextHead from '../Components/TextHead';
// import ImgPara from '../Components/ImgPara';
// import ggoat from '../assets/breeds/goat.jpg';

// import sheep from '../assets/breeds/sheep.jpg';
// import Availabilty from '../Components/Availabilty';
// import axios from 'axios';

// export default function Mutton() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://vstrader-api.onrender.com/get-price');
//         setData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
//   const len=(data.length)-1
//   const goatPrice = data.length > 0 ? data[len].goat['goat-price'] : 'Loading...';
//   const sheepPrice = data.length > 0 ? data[len].goat['sheep-price'] : 'Loading...';
  
//   return (
//     <>
//       <Header />
//       <div className="Muttoncontainer">
      
//           <Image1 pic={Goat} />
       
//         <PriceContainer
//           name1={'Goat'}
//           price1={goatPrice}
//           low1={'599'}
//           high1={'809'}
//           name2={'Sheep'}
//           price2={sheepPrice}
//           low2={'599'}
//           high2={'809'}
//         />
//         <Availabilty avail={'availablE'} />
//       </div>
//       <div className="quote">
//         <Quotes text={'Life is too short not to enjoy a perfectly cooked piece of mutton.'} />
//       </div>
//       <TextHead name={'Breed'} />
//       <ImgPara
//         t1={'Goat'}
//         para1={
//           'meat, also known as mutton or chevon, offers a unique culinary experience with its rich, slightly gamey flavor. Commonly likened to lamb but with a milder taste, goat meat is prized for its versatility in various cuisines worldwide. Notably leaner than many other meats, goat provides a healthier alternative for those seeking to reduce their fat intake. Its higher protein concentration makes it an excellent source of essential amino acids necessary for muscle growth and repair. Moreover, goat meat is packed with essential nutrients such as iron, zinc, vitamin B12, and selenium, contributing to overall health and well-being. Its ease of digestion also makes it a favorable option for individuals with sensitive stomachs or dietary restrictions.'
//         }
//         img1={ggoat}
//         t2={'Sheep'}
//         para2={
//           'meat, commonly known as lamb or mutton, boasts a tender texture and rich flavor profile that adds depth to culinary creations. Recognized for its succulent taste and versatility, lamb is a staple in many cuisines worldwide. A standout feature of sheep meat is its high-quality protein content, making it an excellent choice for those seeking to support muscle health and overall wellness. Additionally, lamb is a rich source of heme iron, a highly absorbable form of iron crucial for oxygen transport in the body and preventing anemia. Alongside essential B vitamins such as vitamin B12, riboflavin, and niacin, sheep meat also contains conjugated linoleic acid (CLA), a fatty acid associated with various health benefits including improved heart health and metabolism regulation. Incorporating lamb into your diet not only enhances culinary diversity but also delivers a wealth of essential nutrients essential for optimal health.'
//         }
//         img2={sheep}
//       />
//     </>
//   );
// }
import React, { useState, useEffect } from 'react';
import Header from '../Connections/Header';
import Image1 from '../Components/Image1';
import Goat from '../assets/goat1.jpg';
import './Cs.css';
import PriceContainer from '../Components/PriceContainer';
import Quotes from '../Components/Quotes';
import TextHead from '../Components/TextHead';
import ImgPara from '../Components/ImgPara';
import ggoat from '../assets/breeds/goat.jpg';
import sheep from '../assets/breeds/sheep.jpg';
import Availabilty from '../Components/Availabilty';
import axios from 'axios';

export default function Mutton() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [highestGoatPrice, setHighestGoatPrice] = useState(-Infinity);
  const [lowestGoatPrice, setLowestGoatPrice] = useState(Infinity);
  const [highestSheepPrice, setHighestSheepPrice] = useState(-Infinity);
  const [lowestSheepPrice, setLowestSheepPrice] = useState(Infinity);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://vstrader-api.onrender.com/get-price');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Extracting highest and lowest prices
    let maxGoatPrice = -Infinity;
    let minGoatPrice = Infinity;
    let maxSheepPrice = -Infinity;
    let minSheepPrice = Infinity;
   
    data.forEach(item => {
      const goatPrice = item.goat['goat-price'];
      const sheepPrice = item.goat['sheep-price'];

      if (goatPrice > maxGoatPrice) {
        maxGoatPrice = goatPrice;
      }
      if (goatPrice < minGoatPrice) {
        minGoatPrice = goatPrice;
      }
      if (sheepPrice > maxSheepPrice) {
        maxSheepPrice = sheepPrice;
      }
      if (sheepPrice < minSheepPrice) {
        minSheepPrice = sheepPrice;
      }
    });

    setHighestGoatPrice(maxGoatPrice);
    setLowestGoatPrice(minGoatPrice);
    setHighestSheepPrice(maxSheepPrice);
    setLowestSheepPrice(minSheepPrice);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const len=(data.length)-1
  const goatPrice1 = data.length > 0 ? data[len].goat['goat-price'] : 'Loading...';
  const sheepPrice1 = data.length > 0 ? data[len].goat['sheep-price'] : 'Loading...';

  return (
    <>
      <Header />
      <div className="Muttoncontainer">
        <Image1 pic={Goat} />
        <PriceContainer
          name1={'Goat'}
          price1={goatPrice1}
          low1={lowestGoatPrice}
          high1={highestGoatPrice}
          name2={'Sheep'}
          price2={sheepPrice1}
          low2={lowestSheepPrice}
          high2={highestSheepPrice}
        />
        <Availabilty avail={'availablE'} />
      </div>
      <div className="quote">
        <Quotes text={'Life is too short not to enjoy a perfectly cooked piece of mutton.'} />
      </div>
      <TextHead name={'Breed'} />
      <ImgPara
        t1={'Goat'}
        para1={
          'meat, also known as mutton or chevon, offers a unique culinary experience with its rich, slightly gamey flavor. Commonly likened to lamb but with a milder taste, goat meat is prized for its versatility in various cuisines worldwide. Notably leaner than many other meats, goat provides a healthier alternative for those seeking to reduce their fat intake. Its higher protein concentration makes it an excellent source of essential amino acids necessary for muscle growth and repair. Moreover, goat meat is packed with essential nutrients such as iron, zinc, vitamin B12, and selenium, contributing to overall health and well-being. Its ease of digestion also makes it a favorable option for individuals with sensitive stomachs or dietary restrictions.'
        }
        img1={ggoat}
        t2={'Sheep'}
        para2={
          'meat, commonly known as lamb or mutton, boasts a tender texture and rich flavor profile that adds depth to culinary creations. Recognized for its succulent taste and versatility, lamb is a staple in many cuisines worldwide. A standout feature of sheep meat is its high-quality protein content, making it an excellent choice for those seeking to support muscle health and overall wellness. Additionally, lamb is a rich source of heme iron, a highly absorbable form of iron crucial for oxygen transport in the body and preventing anemia. Alongside essential B vitamins such as vitamin B12, riboflavin, and niacin, sheep meat also contains conjugated linoleic acid (CLA), a fatty acid associated with various health benefits including improved heart health and metabolism regulation. Incorporating lamb into your diet not only enhances culinary diversity but also delivers a wealth of essential nutrients essential for optimal health.'
        }
        img2={sheep}
      />
    </>
  );
}
