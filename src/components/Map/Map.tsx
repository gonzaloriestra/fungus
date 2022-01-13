import React, { useState } from 'react';
import { Map as MapLeaflet, WMSTileLayer, TileLayer, Polygon } from 'react-leaflet';

import Location from '../../models/Location';

import styles from './map.module.css';
import Coordinate from '../../models/Coordinate';
import MapControls from './MapControls';

type MapProps = {
  mode?: string;
  location?: Location;
  initialZoom?: number;
  onLocationCreated?: (zone: Array<Coordinate>) => void;
};

function mapPositionFromZone(zone): { lat: number; lng: number } {
  if (zone && zone.midpoint) {
    return { lat: zone.midpoint.latitude, lng: zone.midpoint.longitude };
  }
}

const Map = ({
  mode = 'view',
  location,
  initialZoom = 15,
  onLocationCreated = (): void => {},
}: MapProps): JSX.Element => {
  const initialPosition = mapPositionFromZone(location?.zone) || { lat: 42.829022, lng: -4.849545 };

  const [position] = useState(initialPosition);
  const [zoom] = useState(initialZoom);

  const renderLocation = (location): JSX.Element => {
    if (!location) {
      return null;
    }

    const zone = location?.zone;

    return <Polygon positions={zone.coordinates.map((coordinate) => [coordinate.latitude, coordinate.longitude])} />;
  };

  return (
    <MapLeaflet className={styles.container} center={position} zoom={zoom}>
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
      <WMSTileLayer url="https://www.ign.es/wms-inspire/ign-base" format="image/png" layers="IGNBaseOrto" transparent />
      <MapControls mode={mode} onLocationCreated={onLocationCreated} />
      {renderLocation(location)}
    </MapLeaflet>
  );
};

export default Map;