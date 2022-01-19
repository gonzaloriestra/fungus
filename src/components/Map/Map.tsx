import React, { useState } from 'react';
import { MapContainer, WMSTileLayer, TileLayer, Polygon } from 'react-leaflet';
import { LatLng } from 'leaflet';

import Location from '../../models/Location';
import Zone from '../../models/Zone';

import MapControls from './MapControls';

import styles from './map.module.css';

type MapProps = {
  mode?: string;
  location?: Location;
  initialZoom?: number;
  onLocationCreated?: (zone: Zone) => void;
};

function mapPositionFromZone(zone?: Zone): { lat: number; lng: number } | void {
  if (zone && zone.midpoint) {
    return { lat: zone.midpoint.latitude, lng: zone.midpoint.longitude };
  }
}

const Map = ({
  mode = 'view',
  location,
  initialZoom = 15,
  onLocationCreated = (): void => undefined,
}: MapProps): JSX.Element => {
  const initialPosition = mapPositionFromZone(location?.zone) || { lat: 42.829022, lng: -4.849545 };

  const [position] = useState(initialPosition);
  const [zoom] = useState(initialZoom);

  const renderLocation = (location?: Location): JSX.Element | null => {
    if (!location) {
      return null;
    }

    const zone = location?.zone;

    return (
      <Polygon
        positions={zone.coordinates.map((coordinate) => new LatLng(coordinate.latitude, coordinate.longitude))}
      />
    );
  };

  return (
    <MapContainer className={styles.container} center={position} zoom={zoom}>
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
      <WMSTileLayer url="https://www.ign.es/wms-inspire/ign-base" format="image/png" layers="IGNBaseOrto" transparent />
      <MapControls mode={mode} onLocationCreated={onLocationCreated} />
      {renderLocation(location)}
    </MapContainer>
  );
};

export default Map;
