import { Location } from '../../Domain/Location';

export class FindLocationByIdResponse {
  readonly data: { id: string; name: string; coordinates?: Array<{ latitude: number; longitude: number }> } | undefined;

  constructor(location?: Location) {
    if (location) {
      this.data = {
        id: location.id().value(),
        name: location.name(),
        coordinates: location.coordinates().map((coordinate) => ({
          latitude: coordinate.latitude(),
          longitude: coordinate.longitude(),
        })),
      };
    }
  }
}
