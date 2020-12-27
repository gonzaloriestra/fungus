import { Id } from '../Domain/Id';

export default class AddingRegisterToFileFailed extends Error {
  constructor(id: Id) {
    super(`Adding register with id: ${id.value()} to file failed`);
  }
}
