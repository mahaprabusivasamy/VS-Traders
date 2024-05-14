import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
const FormDataComponent = () => {
  const [formData, setFormData] = useState({
    id: '',
    date: new Date(),
    goatPrice: '',
    sheepPrice: '',
    broilerPrice: '',
    countryChickenPrice: '',
    crabPrice: '',
    prawnPrice: ''
  });
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        date: formData.date.toLocaleDateString('en-GB'), // Format date to dd-MM-yyyy
        goat: {
          'goat-price':  parseInt(formData.goatPrice),
          'sheep-price': parseInt(formData.sheepPrice)
        },
        chicken: {
          'broiler-price': parseInt(formData.broilerPrice),
          'countrychicken-price':parseInt(formData.countryChickenPrice)
        },
        fish: {
          'crab-price': parseInt(formData.crabPrice),
          'prawn-price': parseInt(formData.prawnPrice)
        }
      };
            
      const response = await axios.post('https://vstrader-api.onrender.com/add-price', formattedData);
      console.log('Data posted successfully:', response.data);
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error, e.g., show an error message
    }
    setFormData({
        date: new Date(),
        goatPrice: '',
        sheepPrice: '',
        broilerPrice: '',
        countryChickenPrice: '',
        crabPrice: '',
        prawnPrice: ''
      });
      alert('data inserted suceesfully');
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Price Update form</h2>
      <div>
        <label htmlFor="date">Date:</label>
        <DatePicker
          id="date"
          name="date"
          selected={formData.date}
          onChange={handleDateChange}
          dateFormat="dd-MM-yyyy"
          required
        />
      </div>
      <div>
        <label htmlFor="goatPrice">Goat Price:</label>
        <input type="number" id="goatPrice" name="goatPrice" value={formData.goatPrice} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="sheepPrice">Sheep Price:</label>
        <input type="number" id="sheepPrice" name="sheepPrice" value={formData.sheepPrice} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="broilerPrice">Broiler Price:</label>
        <input type="number" id="broilerPrice" name="broilerPrice" value={formData.broilerPrice} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="countryChickenPrice">Country Chicken Price:</label>
        <input type="number" id="countryChickenPrice" name="countryChickenPrice" value={formData.countryChickenPrice} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="crabPrice">Crab Price:</label>
        <input type="number" id="crabPrice" name="crabPrice" value={formData.crabPrice} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="prawnPrice">Prawn Price:</label>
        <input type="number" id="prawnPrice" name="prawnPrice" value={formData.prawnPrice} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormDataComponent;
