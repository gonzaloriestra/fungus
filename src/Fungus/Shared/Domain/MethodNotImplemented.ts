export class MethodNotImplemented extends Error {
  constructor(methodName: string) {
    super(`Method: ${methodName} does not have implementation`);
  }
}
