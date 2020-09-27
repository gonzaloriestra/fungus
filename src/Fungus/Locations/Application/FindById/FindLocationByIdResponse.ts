export class FindLocationByIdResponse {
  readonly id: string;
  readonly name: string;
  readonly coordinates?: Array<{ latitude: number; longitude: number }>;

  constructor({
    id,
    name,
    coordinates,
  }: {
    id: string;
    name: string;
    coordinates: Array<{ latitude: number; longitude: number }>;
  }) {
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
  }
}
