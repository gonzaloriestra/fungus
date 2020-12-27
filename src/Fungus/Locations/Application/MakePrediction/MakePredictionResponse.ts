export class MakePredictionResponse {
  // To-Do How to avoid this definitions
  readonly data: { probability: number };

  constructor({ probability }: { probability: number }) {
    this.data = { probability };
  }
}
