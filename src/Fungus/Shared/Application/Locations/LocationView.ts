export class LocationView {
  private readonly _id: string;
  private readonly _name: string;

  constructor({ id, name }: { id: string; name: string }) {
    this._id = id;
    this._name = name;
  }

  id(): string {
    return this._id;
  }

  name(): string {
    return this._name;
  }
}
