import { LocationId } from '../../Shared/Domain/Locations/LocationId';

// Rename to prediction
export class Forecast {
  _locationId: LocationId;
  // To-Do maybe a value object
  _probability: number;

  constructor({ locationId, probability }: { locationId: LocationId; probability: number }) {
    this._locationId = locationId;
    this._probability = probability;
  }

  locationId(): LocationId {
    return this._locationId;
  }

  probability(): number {
    return this._probability;
  }
}
