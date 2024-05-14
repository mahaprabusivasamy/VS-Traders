import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormDataComponent from './FormDataComponent';
import Avail from './AvailabilityForm'
import FormSubmissions from './FormSubmission';
function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availabilityData, setAvailabilityData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://vstrader-api.onrender.com/get-price');
        // Sort the data based on the date in descending order
        const sortedData = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setData(sortedData);

        const availabilityResponse = await axios.get('https://vstrader-api.onrender.com/get-available');
        setAvailabilityData(availabilityResponse.data);
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

  const displayAvailabilityData = () => {
    const lastUpdatedEntry = availabilityData[0]; // Assuming the first entry is the last updated one
  
    if (!lastUpdatedEntry) {
      return <div>No availability data available</div>;
    }
  
    const columns = Object.keys(lastUpdatedEntry).filter(key => key !== '_id'); // Get all column names
    const columnLabels = {
      goat: 'Goat',
      sheep: 'Sheep',
      'country-chicken': 'Country Chicken',
      'broiler-chicken': 'Broiler Chicken',
      crab: 'Crab',
      prawn: 'Prawn'
    }; // Define labels for each schema name
  
    return (
      <div>
        <h2>Availability</h2>
        <table>
          <tbody>
            {columns.map((column, index) => (
              <tr key={index}>
                <td>{columnLabels[column]}</td>
                <td>{lastUpdatedEntry[column]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  // Function to display prices based on the latest entry
  const displayLatestPrices = () => {
    const count=(data.length)-1
    console.log(count)
    const latestEntry = data[count];
    return (
      <>
        <div>
          <h2>Goat Prices</h2>
          <table>
            <thead>
              <tr>
                <th>Goat Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Goat</td>
                <td>{latestEntry.goat['goat-price']}</td>
              </tr>
              <tr>
                <td>Sheep</td>
                <td>{latestEntry.goat['sheep-price']}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2>Chicken Prices</h2>
          <table>
            <thead>
              <tr>
                <th>Chicken Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Broiler</td>
                <td>{latestEntry.chicken['broiler-price']}</td>
              </tr>
              <tr>
                <td>Country-chicken</td>
                <td>{latestEntry.chicken['countrychicken-price']}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2>Fish Prices</h2>
          <table>
            <thead>
              <tr>
                <th>Fish Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crab</td>
                <td>{latestEntry.fish['crab-price']}</td>
              </tr>
              <tr>
                <td>Prawn</td>
                <td>{latestEntry.fish['prawn-price']}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  return (
    <>
        <h2 className='ap'>Admin Dashboard</h2>
      <div className="whole">
        <div className="table">
          {displayLatestPrices()}
          {displayAvailabilityData()}
        </div>
        <div className="form">
          <FormDataComponent />
        
        </div>
        <Avail/>
        
       
      </div>
      <div className="table cc">
        

      <FormSubmissions/>
      </div>
    </>
  );
}

export default Dashboard;
