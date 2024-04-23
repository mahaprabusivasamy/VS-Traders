import React, { useState, useEffect } from 'react';
import Header from '../Connections/Header';
import Image1 from '../Components/Image1';
import PoultryImage from '../assets/chicken.jpg';
import PriceContainer from '../Components/PriceContainer';
import './Cs.css';
import Quotes from '../Components/Quotes';
import TextHead from '../Components/TextHead';
import ImgPara from '../Components/ImgPara';
import countryhen from '../assets/breeds/country_hen.jpg';
import broiler from '../assets/breeds/broiler.jpg';
import Availabilty from '../Components/Availabilty';
import axios from 'axios';

export default function Poultry() {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const len=(data.length)-1
  const countryHenPrice = data.length > 0 ? data[len].chicken['countrychicken-price'] : 'Loading...';
  const broilerPrice = data.length > 0 ? data[len].chicken['broiler-price'] : 'Loading...';

  return (
    <>
      <Header />
      <div className="Muttoncontainer">
        <div className="container1">
          <Image1 pic={PoultryImage} />
        </div>
        <PriceContainer
          name1={'Country Hen'}
          price1={countryHenPrice}
          low1={'599'}
          high1={'900'}
          name2={'Broiler'}
          price2={broilerPrice}
          low2={'199'}
          high2={'259'}
        />
        <Availabilty avail={'availablE'} />
      </div>
      <div className="quote">
        <Quotes text={'In a world full of birds, be a chicken—because everyone loves chicken.'} />
      </div>
      <TextHead name={'Breed'} />
      <ImgPara
        t1={'Country Hen'}
        para1={
          'Country hen, also known as free-range chicken, offers a distinct flavor and texture compared to conventionally raised poultry. Raised in open spaces with access to natural vegetation and sunlight, country hens lead a more natural lifestyle, resulting in meat that is flavorful and succulent. The meat of country hens is prized for its rich taste and firm texture, making it a favorite among culinary enthusiasts seeking high-quality poultry.'
        }
        img1={countryhen}
        t2={'Broiler'}
        para2={
          'Broiler meat, derived from chickens raised specifically for meat production, is widely consumed worldwide for its convenience, affordability, and versatility. Broiler chickens are bred and raised in controlled environments optimized for rapid growth and efficient meat production. As a result, broiler meat is characterized by its tender texture and mild flavor, making it a versatile ingredient in various culinary dishes.'
        }
        img2={broiler}
      />
    </>
  );
}
