import React, { useState } from 'react';
import { Map as MapLeaflet, WMSTileLayer, TileLayer, Polygon, FeatureGroup } from 'react-leaflet';
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
  const [hasLocationDefined, setHasLocationDefined] = useState(mode === 'view');

  const renderEditionMode = (mode): JSX.Element => {
    if (mode !== 'edit') {
      return null;
    }
    const handleOnCreate = (event): void => {
      if (event.layer?.editing?.latlngs[0][0]) {
        const coordinates = event.layer?.editing?.latlngs[0][0];

        setHasLocationDefined(true);

        onLocationCreated(coordinates.map((coordinate) => ({ latitude: coordinate.lat, longitude: coordinate.lng })));
      }
    };

    const handleOnDelete = (event): void => {
      if (event.layers?.getLayers().length > 0) {
        setHasLocationDefined(false);
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
            polygon: hasLocationDefined
              ? false
              : {
                  allowIntersection: false,
                  drawError: {
                    color: '#e1e100',
                    message: 'Oops! you cannot draw in that way.',
                  },
                  shapeOptions: {
                    color: '#b5cc18',
                  },
                },
          }}
          onCreated={handleOnCreate}
          onDeleted={handleOnDelete}
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
      <WMSTileLayer url="https://www.ign.es/wms-inspire/ign-base" format="image/png" layers="IGNBaseOrto" transparent />
      {renderEditionMode(mode)}
      {renderLocation(location)}
    </MapLeaflet>
  );
};

export default Map;
