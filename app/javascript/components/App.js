import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Map from './Map';

const App = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/places')
      .then(response => setPlaces(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Map places={places} />
    </div>
  );
};

export default App;