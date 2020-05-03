import { v4 as uuidv4 } from 'uuid';

export class MushroomId {
  _id: string;

  static create(): MushroomId {
    return new MushroomId(uuidv4());
  }

  constructor(id: string) {
    this._id = id;
  }

  value(): string {
    return this._id;
  }

  equalTo(aMushroomId: MushroomId): boolean {
    return this.value() === aMushroomId.value();
  }
}
