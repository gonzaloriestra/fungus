import { Harvest } from './Harvest';
import { Location } from '../../../valueObjects/Location';

describe('Harvest', () => {
  describe('.isEqual', () => {
    it('should return true when you compare the same object', () => {
      const harvestOne = new Harvest({ location: new Location({ id: '0001' }), date: new Date() });

      expect(harvestOne.isEqual(harvestOne)).toBeTruthy();
    });

    it('should return false for different harvest instances', () => {
      const harvestOne = new Harvest({ location: new Location({ id: '0001' }), date: new Date() });
      const harvestTwo = new Harvest({ location: new Location({ id: '0002' }), date: new Date() });

      expect(harvestOne.isEqual(harvestTwo)).toBeFalsy();
    });
  });
});
