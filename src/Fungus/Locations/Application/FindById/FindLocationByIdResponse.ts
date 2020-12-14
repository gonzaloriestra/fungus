import { Location } from '../../Domain/Location';

export class FindLocationByIdResponse {
  readonly id: string;
  readonly name: string;
  readonly zone: {
    midpoint: { latitude: number; longitude: number };
    coordinates: Array<{ latitude: number; longitude: number }>;
  };

  constructor(location: Location) {
    this.id = location.id().value();
    this.name = location.name();
    this.zone = { midpoint: location.zone().midpoint().toPrimitives(), coordinates: location.zone().toPrimitives() };
  }
}
