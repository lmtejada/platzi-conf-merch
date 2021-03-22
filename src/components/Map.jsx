import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const key = process.env.MAPS_KEY;

  const mapStyles = {
    height: '50vh',
    width: '100%'
  };

  const defaultCenter = {
    lat: 19.4267261,
    lng: -99.17796
  };

  const position = data && data.lat ? data : defaultCenter;

  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={position}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
