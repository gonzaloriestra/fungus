import React, { useState } from 'react';
import { Map as MapLeaflet, TileLayer, Polygon, FeatureGroup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { EditControl } from 'react-leaflet-draw';

import Location from '../../models/Location';

import styles from './map.module.css';

type MapProps = {
  mode?: string;
  location?: Location;
  initialZoom?: number;
};

function mapPositionFromArea(area): LatLngExpression {
  if (area && area.length) {
    return { lat: area[0].latitude, lng: area[0].longitude };
  }
}

const Map = ({ mode = 'view', location, initialZoom = 15 }: MapProps): JSX.Element => {
  const initialPosition = mapPositionFromArea(location?.area) || { lat: 42.829022, lng: -4.849545 };

  const [position] = useState(initialPosition);
  const [zoom] = useState(initialZoom);

  const renderEditionMode = (mode): JSX.Element => {
    if (mode !== 'edit') {
      return null;
    }
    const handleOnCreate = (event): void => {
      console.log(event.layer.editing.latlngs);
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

    const area = location?.area;

    return <Polygon positions={area.map((coordinate) => [coordinate.latitude, coordinate.longitude])} />;
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
