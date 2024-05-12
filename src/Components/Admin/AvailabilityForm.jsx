import React, { useState } from 'react';
import axios from 'axios';

const AvailabilityForm = () => {
    const [availabilityData, setAvailabilityData] = useState({
        goat: '',
        sheep: '',
        countryChicken: '',
        broiler: '',
        crab: '',
        prawn: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAvailabilityData({
            ...availabilityData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://example.com/add-availability', availabilityData);
            console.log('Data posted successfully:', response.data);
            // Handle success, e.g., show a success message
        } catch (error) {
            console.error('Error posting data:', error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <form className="availability-form" onSubmit={handleSubmit}>
           <h2>Availabilty Form</h2>
            <div>
                <label htmlFor="goat">Goat:</label>
                <select id="goat" name="goat" value={availabilityData.goat} onChange={handleChange}>
                    <option value="available">Available</option>
                    <option value="not-available">Not Available</option>
                </select>
            </div>
            <div>
                <label htmlFor="sheep">Sheep:</label>
                <select id="sheep" name="sheep" value={availabilityData.sheep} onChange={handleChange}>
                    <option value="available">Available</option>
                    <option value="not-available">Not Available</option>
                </select>
            </div>
            <div>
                <label htmlFor="countryChicken">Country Chicken:</label>
                <select id="countryChicken" name="countryChicken" value={availabilityData.countryChicken} onChange={handleChange}>
                    <option value="available">Available</option>
                    <option value="not-available">Not Available</option>
                </select>
            </div>
            <div>
                <label htmlFor="broiler">Broiler:</label>
                <select id="broiler" name="broiler" value={availabilityData.broiler} onChange={handleChange}>
                    <option value="available">Available</option>
                    <option value="not-available">Not Available</option>
                </select>
            </div>
            <div>
                <label htmlFor="crab">Crab:</label>
                <select id="crab" name="crab" value={availabilityData.crab} onChange={handleChange}>
                    <option value="available">Available</option>
                    <option value="not-available">Not Available</option>
                </select>
            </div>
            <div>
                <label htmlFor="prawn">Prawn:</label>
                <select id="prawn" name="prawn" value={availabilityData.prawn} onChange={handleChange}>
                    <option value="available">Available</option>
                    <option value="not-available">Not Available</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AvailabilityForm;
