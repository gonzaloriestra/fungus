import { LocationId } from '../../Shared/Domain/LocationId';
import { MethodNotImplemented } from '../../Shared/Domain/MethodNotImplemented';
import { FileRepository } from '../../Shared/Infrastructure/FileRepository';

import { Location } from '../Domain/Location';
import { LocationRepository } from '../Domain/LocationRepository';
import { Locations } from '../Domain/Locations';

export class FileLocationRepository extends FileRepository implements LocationRepository {
  private readonly _locations: Locations;

  constructor({
    locations = new Locations(),
    filePath = 'database/locations.txt',
    onLoad,
  }: { locations?: Locations; filePath?: string; onLoad?: () => void } = {}) {
    super({ filePath });

    this._locations = locations;

    this.readAll({
      onLineRead: (json) => {
        this._locations.add(Location.fromPrimitives(json));
      },
      onFinish: onLoad,
    });
  }

  findById(id: LocationId): Location | undefined {
    return this._locations.findById(id);
  }

  add(location: Location): void {
    this._locations.add(location);

    this.write(location);
  }

  all(): Locations {
    return this._locations;
  }

  clean(): void {
    throw new MethodNotImplemented('FileLocationRepository.clean');
  }
}
