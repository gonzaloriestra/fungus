import { HarvestsView } from './HarvestsView';

export interface HarvestQuery {
  filterBy: (filters: { locationId?: string }) => HarvestsView;
}
