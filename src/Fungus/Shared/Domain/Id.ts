import { v4 as uuidv4 } from 'uuid';

export class Id {
  private readonly _id: string;

  constructor(id: string) {
    this._id = id;
  }

  static create(): Id {
    return new Id(uuidv4());
  }

  value(): string {
    return this._id;
  }

  equalTo(aId: Id): boolean {
    return this.value() === aId.value();
  }
}
