export class MethodNotImplemented extends Error {
  // To-Do add param for method name
  constructor() {
    super(`Method does not have implementation`);
  }
}
