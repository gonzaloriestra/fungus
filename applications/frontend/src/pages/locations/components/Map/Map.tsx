import React, { useState } from 'react';
import { Map as MapLeaflet, TileLayer, Polygon, FeatureGroup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { EditControl } from 'react-leaflet-draw';

import Location from '../../models/Location';

import styles from './map.module.css';
import Coordinate from '../../models/Coordinate';

type MapProps = {
  mode?: string;
  location?: Location;
  initialZoom?: number;
  onLocationCreated?: (zone: Array<Coordinate>) => void;
};

function mapPositionFromZone(zone): LatLngExpression {
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

  const renderEditionMode = (mode): JSX.Element => {
    if (mode !== 'edit') {
      return null;
    }
    const handleOnCreate = (event): void => {
      if (event.layer?.editing?.latlngs[0][0]) {
        const coordinates = event.layer?.editing?.latlngs[0][0];

        onLocationCreated(coordinates.map((coordinate) => ({ latitude: coordinate.lat, longitude: coordinate.lng })));
      }
    };

    return (
      <FeatureGroup>
        <EditControl
          position="topright"
          draw={{
            rectangle: false,
            circle: false,
            marker: false,
            circlemarker: false,
            polyline: false,
          }}
          onCreated={handleOnCreate}
        />
      </FeatureGroup>
    );
  };

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
      {renderEditionMode(mode)}
      {renderLocation(location)}
    </MapLeaflet>
  );
};

export default Map;
