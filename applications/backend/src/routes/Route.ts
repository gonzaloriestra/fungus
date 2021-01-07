import { Server } from '@hapi/hapi';

export interface Route {
  register(app: Server): void;
}
