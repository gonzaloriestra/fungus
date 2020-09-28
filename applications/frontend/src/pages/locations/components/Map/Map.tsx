import React, { useState } from 'react';
import { Map as MapLeaflet, TileLayer, Polygon } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

import Location from '../../models/Location';

import styles from './map.module.css';

type MapProps = {
  location: Location;
  initialZoom?: number;
};

function mapPositionFromArea(area): LatLngExpression {
  if (area && area.length) {
    return { lat: area[0].latitude, lng: area[0].longitude };
  }
}

const Map = ({ location, initialZoom = 15 }: MapProps): JSX.Element => {
  const area = location?.area;

  const [position] = useState(mapPositionFromArea(area));
  const [zoom] = useState(initialZoom);

  return (
    <MapLeaflet className={styles.container} center={position} zoom={zoom}>
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
      <Polygon positions={area.map((coordinate) => [coordinate.latitude, coordinate.longitude])} />
    </MapLeaflet>
  );
};

export default Map;
