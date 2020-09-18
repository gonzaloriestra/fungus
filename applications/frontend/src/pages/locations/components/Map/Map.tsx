import React, { useState } from 'react';
import { Map as MapLeaflet, TileLayer, Polygon } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

import Location from '../../models/Location';

import styles from './map.module.css';

type MapProps = {
  location: Location;
  initialZoom?: number;
};

function mapPositionFromCoordinates(coordinates): LatLngExpression {
  if (coordinates && coordinates.length) {
    return { lat: coordinates[0].latitude, lng: coordinates[0].longitude };
  }
}

const Map = ({ location, initialZoom = 15 }: MapProps): JSX.Element => {
  const coordinates = location?.coordinates;

  const [position] = useState(mapPositionFromCoordinates(coordinates));
  const [zoom] = useState(initialZoom);

  return (
    <MapLeaflet className={styles.container} center={position} zoom={zoom}>
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
      <Polygon positions={coordinates.map((coordinate) => [coordinate.latitude, coordinate.longitude])} />
    </MapLeaflet>
  );
};

export default Map;
