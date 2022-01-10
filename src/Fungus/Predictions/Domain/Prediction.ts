export type Primitives = { probability: number };

export class Prediction {
  // To-Do maybe a value object
  private readonly _probability: number;

  constructor({ probability }: Primitives) {
    this._probability = probability;
  }

  probability(): number {
    return this._probability;
  }

  toPrimitives(): Primitives {
    return {
      probability: this.probability(),
    };
  }
}
