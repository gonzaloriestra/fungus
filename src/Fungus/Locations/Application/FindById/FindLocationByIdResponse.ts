export class FindLocationByIdResponse {
  readonly id: string;
  readonly name: string;
  readonly area?: Array<{ latitude: number; longitude: number }>;

  constructor({ id, name, area }: { id: string; name: string; area: Array<{ latitude: number; longitude: number }> }) {
    this.id = id;
    this.name = name;
    this.area = area;
  }
}
