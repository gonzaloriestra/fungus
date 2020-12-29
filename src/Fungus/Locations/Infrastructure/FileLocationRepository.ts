import * as fs from 'fs';
import * as readline from 'readline';

import { Location } from '../Domain/Location';
import { LocationRepository } from '../Domain/LocationRepository';
import { LocationId } from '../../Shared/Domain/Locations/LocationId';
import { MethodNotImplemented } from '../../Shared/Domain/MethodNotImplemented';
import { Locations } from '../Domain/Locations';

export class FileLocationRepository implements LocationRepository {
  locations: Locations;
  filePath: string;

  constructor({
    locations = new Locations(),
    filePath = 'database/locations.txt',
    onLoad,
  }: { locations?: Locations; filePath?: string; onLoad?: () => void } = {}) {
    this.locations = locations;
    this.filePath = filePath;

    this.__fetch({ onFinish: onLoad });
  }

  __fetch({ onFinish = (): void => undefined }: { onFinish?: () => void } = {}): void {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(this.filePath),
      crlfDelay: Infinity,
    });

    lineReader.on('close', onFinish);
    lineReader.on('line', (line) => {
      const json = JSON.parse(line);

      this.locations.add(Location.fromPrimitives(json));
    });
  }

  findById(id: LocationId): Location | undefined {
    return this.locations.findById(id);
  }

  add(location: Location): void {
    this.locations.add(location);

    fs.appendFile(this.filePath, `${JSON.stringify(location.toPrimitives())}\n`, (err) => {
      if (err) throw err; // To-Do Define own error
    });
  }

  all(): Locations {
    return this.locations;
  }

  clean(): void {
    throw new MethodNotImplemented('FileLocationRepository.clean');
  }
}
