export class MethodNotImplemented extends Error {
  constructor() {
    super(`Method does not have implementation`);
  }
}
