export class HarvestView {
  private readonly _id: string;
  private readonly _date: string;
  private readonly _locationId: string;
  private readonly _mushroomId: string;
  private readonly _quantity?: number;

  constructor({
    id,
    date,
    locationId,
    mushroomId,
    quantity,
  }: {
    id: string;
    date: string;
    locationId: string;
    mushroomId: string;
    quantity?: number;
  }) {
    this._id = id;
    this._date = date;
    this._locationId = locationId;
    this._mushroomId = mushroomId;
    this._quantity = quantity;
  }

  id(): string {
    return this._id;
  }

  date(): string {
    return this._date;
  }

  locationId(): string {
    return this._locationId;
  }

  mushroomId(): string {
    return this._mushroomId;
  }

  quantity(): number | undefined {
    return this._quantity;
  }
}
