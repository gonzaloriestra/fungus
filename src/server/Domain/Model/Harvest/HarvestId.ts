import { v4 as uuidv4 } from 'uuid';

export class HarvestId {
  _id: string;

  static create(): HarvestId {
    return new HarvestId(uuidv4());
  }

  constructor(id: string) {
    this._id = id;
  }

  id(): string {
    return this._id;
  }

  equalTo(aHarvestId: HarvestId): boolean {
    return this._id === aHarvestId.id();
  }
}
