import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import MapGL, { Marker } from '@mapbox/react-map-gl';
import { setLocation, setPlaces } from './features/location/locationSlice';
import 'tailwindcss/tailwind.css';

const App = () => {
  const dispatch = useDispatch();
  const { latitude, longitude, places } = useSelector((state) => state.location);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        dispatch(setLocation({ latitude, longitude }));

        axios.get('/maps/search', {
          params: {
            latitude: latitude,
            longitude: longitude
          }
        }).then(response => {
          dispatch(setPlaces(response.data));
        }).catch(error => {
          console.error(error);
        });
      });
    }
  }, [dispatch]);

  return (
    <div className="App">
      {latitude && longitude ? (
        <>
          <MapGL
            latitude={latitude}
            longitude={longitude}
            zoom={14}
            width="100%"
            height="500px"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          >
            {places.map((place) => (
              <Marker
                key={place.id}
                latitude={place.geometry.location.lat}
                longitude={place.geometry.location.lng}
              >
                <div className="marker">📍</div>
              </Marker>
            ))}
          </MapGL>
          <div className="places-list">
            {places.map((place) => (
              <div key={place.id} className="place">
                <h2>{place.name}</h2>
                <p>{place.vicinity}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>現在地を取得中...</p>
      )}
    </div>
  );
};

export default App;