import { LocationView } from './LocationView';

export interface LocationQuery {
  all: () => Array<LocationView>;
}
