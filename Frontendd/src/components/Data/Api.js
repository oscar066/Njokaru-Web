
// Assuming you have a component named MyComponent.js

import React, { useState } from 'react';

function MyComponent() {
  const [flaskData, setFlaskData] = useState('');

  const getDataFromFlask = () => {
    // Make a fetch request to your Flask route
    fetch('http://localhost:5000/api/data') // Adjust the URL based on your Flask server
      .then(response => response.json())
      .then(data => {
        // Update the state with the data from Flask
        setFlaskData(data.message);
      })
      .catch(error => {
        console.error('Error fetching data from Flask:', error);
        setFlaskData('Error fetching data from Flask');
      });
  };

  return (
    <div>
      <h1>Hello from React!</h1>
      <button onClick={getDataFromFlask}>Get Data from Flask</button>
      <div>{flaskData}</div>
    </div>
  );
}

export default MyComponent;
