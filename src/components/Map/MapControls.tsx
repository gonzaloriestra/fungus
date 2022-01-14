import React, { useState } from 'react';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

import Zone from '../../models/Zone';

type MapProps = {
  mode?: string;
  onLocationCreated?: (zone: Zone) => void;
};

const MapControls = ({ mode = 'view', onLocationCreated = (): void => undefined }: MapProps): JSX.Element | null => {
  const [hasLocationDefined, setHasLocationDefined] = useState(mode === 'view');

  if (mode !== 'edit') {
    return null;
  }

  const handleOnCreate = (event: any): void => {
    if (event.layer?.editing?.latlngs[0][0]) {
      const coordinates = event.layer?.editing?.latlngs[0][0];

      setHasLocationDefined(true);

      onLocationCreated(
        coordinates.map((coordinate: { lat: number; lng: number }) => ({
          latitude: coordinate.lat,
          longitude: coordinate.lng,
        })),
      );
    }
  };

  const handleOnDelete = (event: any): void => {
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

export default MapControls;
