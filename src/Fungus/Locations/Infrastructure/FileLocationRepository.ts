import * as fs from 'fs';
import * as readline from 'readline';

import { Location } from '../Domain/Location';
import { LocationRepository } from '../Domain/LocationRepository';
import { LocationId } from '../../Shared/Domain/LocationId';

export class FileLocationRepository implements LocationRepository {
  locations: Array<Location>;
  filePath: string;

  constructor({
    locations = [],
    filePath = 'database/locations.txt',
    onLoad,
  }: { locations?: Array<Location>; filePath?: string; onLoad?: () => void } = {}) {
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

      this.locations.push(Location.fromPrimitives(json));
    });
  }

  findById(id: LocationId): Location | undefined {
    return this.locations.find((location) => location.idEqualTo(id));
  }

  add(location: Location): void {
    this.locations.push(location);

    fs.appendFile(this.filePath, `${JSON.stringify(location.toPrimitives())}\n`, (err) => {
      if (err) throw err; // To-Do Define own error
    });
  }

  all(): Array<Location> {
    return this.locations;
  }

  clean(): void {
    // To-Do throw a NotImplementedException
  }
}
