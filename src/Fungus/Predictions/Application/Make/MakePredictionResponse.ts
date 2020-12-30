import { Primitives } from '../../Domain/Prediction';

export class MakePredictionResponse {
  readonly prediction: Primitives;

  constructor(prediction: Primitives) {
    this.prediction = prediction;
  }
}
