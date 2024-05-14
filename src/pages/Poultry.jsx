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
import Footer from '../Components/Footer';

export default function Poultry() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [highestGoatPrice, setHighestGoatPrice] = useState(-Infinity);
  const [lowestGoatPrice, setLowestGoatPrice] = useState(Infinity);
  const [highestSheepPrice, setHighestSheepPrice] = useState(-Infinity);
  const [lowestSheepPrice, setLowestSheepPrice] = useState(Infinity);
  const [error, setError] = useState(null);
  const [data2 ,setData2]=useState([]);
const [broilera,setBroilera]=useState(String)
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
  useEffect(() => {
    // Extracting highest and lowest prices
   
    let maxGoatPrice = -Infinity;
    let minGoatPrice = Infinity;
    let maxSheepPrice = -Infinity;
    let minSheepPrice = Infinity;
   
    data.forEach(item => {
      const goatPrice = item.chicken['broiler-price'];
      const sheepPrice = item.chicken['countrychicken-price'];

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
  const countryHenPrice = data.length > 0 ? data[len].chicken['countrychicken-price'] : 'Loading...';
  const broilerPrice = data.length > 0 ? data[len].chicken['broiler-price'] : 'Loading...';
  const l2=(data2.length)-1;
  const goatAvailability = data2.length > 0 ? data2[l2]['country-chicken'] : 'loading';
const sheepAvailability = data2.length > 0 ? data2[l2]['broiler-chicken'] : 'loading';


 

  return (
    <>
      <Header />
      <div className="Muttoncontainer">
        {/* <div className="container1"> */}
          <Image1 pic={PoultryImage} />
        {/* </div> */}
        <PriceContainer
          name1={'Country Hen'}
          price1={countryHenPrice}
          low1={lowestSheepPrice}
          high1={highestSheepPrice}
          name2={'Broiler'}
          price2={broilerPrice}
          low2={lowestGoatPrice}
          high2={highestGoatPrice}
        />
        <Availabilty avail={'availablE'} gv={goatAvailability} sv={sheepAvailability}/>
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
      <Footer/>
    </>
  );
}
