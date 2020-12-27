export class MushroomView {
  private readonly _id: string;
  private readonly _scientificName: string;

  constructor({ id, scientificName }: { id: string; scientificName: string }) {
    this._id = id;
    this._scientificName = scientificName;
  }

  id(): string {
    return this._id;
  }

  scientificName(): string {
    return this._scientificName;
  }
}
