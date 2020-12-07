import { v4 as uuidv4 } from 'uuid';

export class Id {
  _id: string;

  static create(): Id {
    return new Id(uuidv4());
  }

  constructor(id: string) {
    this._id = id;
  }

  value(): string {
    return this._id;
  }

  equalTo(aId: Id): boolean {
    return this.value() === aId.value();
  }
}
