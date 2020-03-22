import fs from 'fs';

import { HarvestRepository } from "../../../../Domain/Model/Harvest/HarvestRepository";
import { HarvestId } from '../../../../Domain/Model/Harvest/HarvestId';
import { Harvest } from '../../../../Domain/Model/Harvest/Harvest';

export class FileHarvestRepository implements HarvestRepository {
  FILE_PATH = 'harvest.txt';

  nextIdentity() {
    return HarvestId.create()
  }

  add(harvest: Harvest) {
    // TO DO serialize Harvest to be include into the file
    fs.appendFile(this.FILE_PATH, 'data to append', function (err: any) {
      if (err) throw err; // Define own error
    });
  };
}
