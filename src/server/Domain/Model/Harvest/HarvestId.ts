import { v4 as uuidv4 } from 'uuid';

export class HarvestId {
  _id: string

  static create() {
    return new HarvestId(uuidv4());
  }

  constructor(id: string) {
    this._id = id;
  }

  id() {
    return this._id;
  }

  equalTo(aHarvestId: HarvestId) {
    return this._id === aHarvestId.id();
  }
};
