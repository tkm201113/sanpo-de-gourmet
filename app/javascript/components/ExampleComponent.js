import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const ExampleComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/places')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(place => (
        <div key={place.id}>{place.name}</div>
      ))}
    </div>
  );
};

export default ExampleComponent;