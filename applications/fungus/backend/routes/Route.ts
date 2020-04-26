import { Server } from 'hapi';

export interface Route {
  register(app: Server): void;
}
