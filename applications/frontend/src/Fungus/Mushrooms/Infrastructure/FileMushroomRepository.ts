import { MethodNotImplemented } from '../../Shared/Domain/MethodNotImplemented';
import { MushroomId } from '../../Shared/Domain/MushroomId';

import { FileRepository } from '../../Shared/Infrastructure/FileRepository';

import { MushroomRepository } from '../Domain/MushroomRepository';
import { Mushrooms } from '../Domain/Mushrooms';
import { Mushroom } from '../Domain/Mushroom';

export class FileMushroomRepository extends FileRepository implements MushroomRepository {
  private readonly _mushrooms: Mushrooms;

  constructor({
    mushrooms = new Mushrooms(),
    filePath = 'database/mushrooms.txt',
    onLoad,
  }: { mushrooms?: Mushrooms; filePath?: string; onLoad?: () => void } = {}) {
    super({ filePath });

    this._mushrooms = mushrooms;

    this.readAll({
      onLineRead: (json) => {
        this._mushrooms.add(Mushroom.fromPrimitives(json));
      },
      onFinish: onLoad,
    });
  }

  findById(id: MushroomId): Mushroom | undefined {
    return this._mushrooms.findById(id);
  }

  findByScientificName(scientificName: string): Mushroom | undefined {
    return this._mushrooms.findByScientificName(scientificName);
  }

  add(mushroom: Mushroom): void {
    this._mushrooms.add(mushroom);

    this.write(mushroom);
  }

  all(): Mushrooms {
    return this._mushrooms;
  }

  clean(): void {
    this.cleanContent();
  }
}
