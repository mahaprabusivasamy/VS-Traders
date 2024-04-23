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

export default function Fish_seafoods() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  const len=(data.length)-1

  return (
    <>
      <Header />
      <div className="Muttoncontainer">
        <Image1 pic={Fish} />
        <PriceContainer
          name1={'Prawn'}
          price1={data.length > 0 ? data[len].fish['prawn-price'] : 'Loading...'}
          low1={'499'}
          high1={'809'}
          name2={'Crab'}
          price2={data.length > 0 ? data[len].fish['crab-price'] : 'Loading...'}
          low2={'699'}
          high2={'1200'}
        />
        <Availabilty avail={'availablE'} />
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
    </>
  );
}
