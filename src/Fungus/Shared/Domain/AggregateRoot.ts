import { Id } from './Id';

export abstract class AggregateRoot {
  abstract toPrimitives(): object;
  abstract id(): Id;
}
