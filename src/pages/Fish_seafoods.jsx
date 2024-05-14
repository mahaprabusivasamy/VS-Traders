import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Connections/Header';
import Image1 from '../Components/Image1';
import Fish from '../assets/fish.jpg';
import './Cs.css';
import PriceContainer from '../Components/PriceContainer';
import Quotes from '../Components/Quotes';
import TextHead from '../Components/TextHead';
import crab from '../assets/breeds/crab.jpg';
import prawn from '../assets/breeds/prawn.jpg';
import ImgPara from '../Components/ImgPara';
import Availabilty from '../Components/Availabilty';
import Footer from '../Components/Footer';

export default function Fish_seafoods() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [highestGoatPrice, setHighestGoatPrice] = useState(-Infinity);
  const [lowestGoatPrice, setLowestGoatPrice] = useState(Infinity);
  const [highestSheepPrice, setHighestSheepPrice] = useState(-Infinity);
  const [lowestSheepPrice, setLowestSheepPrice] = useState(Infinity);
  const [data2 ,setData2]=useState([]);

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
      const goatPrice = item.fish['crab-price'];
      const sheepPrice = item.fish['prawn-price'];

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

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await axios.get('https://vstrader-api.onrender.com/get-available');
        setData2(response.data);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching availability:', error);
      }
    };

    fetchAvailability();
  }, []);
  
  const l2=(data2.length)-1;
  const crabAvailability = data2.length > 0 ? data2[l2]['crab'] : 'loading';
  const prawnAvailability = data2.length > 0 ? data2[l2]['prawn'] : 'loading';
  
  // console.log(crabAvailability,prawnAvailability)
  const len=(data.length)-1
// alert(crabAvailability)
  return (
    <>
      <Header />
      <div className="Muttoncontainer">
        <Image1 pic={Fish} />
        <PriceContainer
          name1={'Prawn'}
          price1={data.length > 0 ? data[len].fish['prawn-price'] : 'Loading...'}
          low1={lowestSheepPrice}
          high1={highestSheepPrice}
          name2={'Crab'}
          price2={data.length > 0 ? data[len].fish['crab-price'] : 'Loading...'}
          low2={lowestGoatPrice}
          high2={highestGoatPrice}
        />
        <Availabilty avail={'availablE'} 
        gv={crabAvailability} sv={prawnAvailability}
        />
      </div>
      <div className="quote">
        <Quotes text={'In a world where you can be anything, be kind... and share your seafood'} />
      </div>
      <TextHead name={'Breed'} />
      <ImgPara
        t1={'Crab'}
        para1={
          ' meat, prized for its delicate flavor and tender texture, is a popular seafood choice enjoyed by seafood enthusiasts worldwide. Available in various species and preparations, crab meat offers a diverse range of culinary experiences, from succulent claws to sweet, flaky body meat. Whether enjoyed steamed, boiled, grilled, or in decadent crab cakes and salads, crab meat delights the palate with its rich taste and subtle sweetness. In addition to its exceptional taste, crab meat is a nutritional powerhouse, packed with essential nutrients such as protein, omega-3 fatty acids, vitamins, and minerals. With its low calorie and fat content, crab meat provides a guilt-free indulgence that supports overall health and well-being. Moreover, crab meat is a good source of selenium, a trace mineral with antioxidant properties that help protect cells from oxidative stress and support immune function. Incorporating crab meat into your diet offers a delicious way to enjoy the health benefits of seafood while savoring the unique flavors of the sea.'
        }
        img1={crab}
        t2={'Prawn'}
        para2={
          ', also known as shrimp in some regions, is a versatile and delicious seafood cherished for its sweet flavor and tender texture. Whether grilled, sautéed, steamed, or incorporated into stir-fries, curries, and pasta dishes, prawn meat adds depth and richness to a wide array of culinary creations. Packed with protein, prawn meat provides essential amino acids necessary for muscle growth, repair, and overall body function. Additionally, prawns are low in fat and calories, making them a healthy protein option for those looking to maintain a balanced diet. Rich in omega-3 fatty acids, prawns offer heart-healthy benefits by promoting cardiovascular health and reducing the risk of heart disease. Furthermore, prawns contain significant amounts of vitamin B12, iodine, and selenium, essential nutrients that support nerve function, thyroid health, and antioxidant defense mechanisms. Whether enjoyed as an appetizer, main course, or seafood delicacy, prawn meat offers a delectable and nutritious addition to any meal, providing a taste of the sea with every bite.'
        }
        img2={prawn}
      />

      <Footer/>
    </>
  );
}
