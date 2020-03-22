export class HarvestId {
  _id: String

  constructor(id: String) {
    this._id = id;
  }

  id() {
    return this._id;
  }

  equalTo(aHarvestId: HarvestId) {
    return this._id === aHarvestId.id();
  }
};
