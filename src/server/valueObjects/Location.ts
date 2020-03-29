import { isEqual } from 'lodash';
export class Location {
  _id: String;

  constructor({id}: {id: String} = {id: ''}) {
    this._id = id;
  }

  isEqual(harvest: Location) {
    return isEqual(this, harvest);
  }
}
