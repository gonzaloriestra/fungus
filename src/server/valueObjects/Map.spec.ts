import { Location } from '../Domain/Model/Location/Location';
import { Map } from './Map';

describe('Map', () => {
  const locationOne = new Location({ id: '0001' });
  const locationTwo = new Location({ id: '0002' });

  const subject = new Map({locations: [locationOne, locationTwo]});

  describe('includes', () => {
    it('should return TRUE if the location received IS in the map', () => {
      const result = subject.includes(locationOne);

      expect(result).toBeTruthy();
    });

    it("should return FALSE if the location received IS NOT in the map", () => {
      const locationThree = new Location({ id: '0003' });
      const result = subject.includes(locationThree);

      expect(result).toBeFalsy();
    });
  });
});
