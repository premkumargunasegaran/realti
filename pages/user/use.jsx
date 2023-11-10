import React, { useState } from 'react';

const YourComponent = () => {
  const [todos, settodos] = useState([])
  const apiUrls = [
    "https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/6/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/7/"
  ];
  
  const fetchData = async () => {
    try {
      // Use Promise.all to fetch data from multiple APIs concurrently
      const responses = await Promise.all(apiUrls.map(url => fetch(url)));
  
      // Use Promise.all to convert the responses to JSON concurrently
      const data = await Promise.all(responses.map(response => response.json()));
  
      // Now, 'data' is an array containing the data from all APIs
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Call the function to initiate the API requests
  fetchData();
  
  console.log(todos);

  return (
    <div>
      {/* Your component content */}
     prem
    </div>
  );
};

export default YourComponent;
