export class MakePredictionResponse {
  // To-Do How to avoid this definitions
  readonly prediction: { probability: number };

  constructor({ probability }: { probability: number }) {
    this.prediction = { probability };
  }
}
