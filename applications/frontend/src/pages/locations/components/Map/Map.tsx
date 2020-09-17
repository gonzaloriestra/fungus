import React, { useState } from 'react';
import { Map as MapLeaflet, TileLayer, Polygon } from 'react-leaflet';

import Coordinate from '../../models/Coordinate';

type MapProps = {
  location: Array<Coordinate>;
};

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
];

const Map = ({ location }: MapProps): JSX.Element => {
  const [position] = useState({ lat: location[0].latitude, lng: location[0].longitude });
  const [zoom] = useState(15);

  return (
    <MapLeaflet
      center={position}
      zoom={zoom}
      style={{
        height: '700px',
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapLeaflet>
  );
};

export default Map;
