import * as fs from 'fs';
import * as readline from 'readline';

import { Location } from '../Domain/Location';
import { LocationRepository } from '../Domain/LocationRepository';
import { LocationId } from '../Domain/LocationId';
import { Area } from '../Domain/Area';
import { Coordinate } from '../Domain/Coordinate';

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

      const location = new Location({
        id: new LocationId(json._id._id),
        name: json._name,
        area: new Area({
          coordinates: json._area._coordinates.map(
            (coordinate: any) => new Coordinate({ latitude: coordinate._latitude, longitude: coordinate._longitude }),
          ),
        }),
      });

      this.locations.push(location);
    });
  }

  findById(id: LocationId): Location | undefined {
    //To-Do equalTo should be into location value object
    return this.locations.find((location) => location.id().equalTo(id));
  }

  add(location: Location): void {
    this.locations.push(location);

    fs.appendFile(this.filePath, `${JSON.stringify(location)}\n`, (err) => {
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
