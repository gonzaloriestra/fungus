export class MushroomResponse {
  readonly id: string;
  readonly scientificName: string;

  constructor({ id, scientificName }: { id: string; scientificName: string }) {
    this.id = id;
    this.scientificName = scientificName;
  }
}
