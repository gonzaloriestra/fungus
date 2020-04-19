import { Location } from '../../../src/Fungus/Locations/Domain/Location';
import { Map } from '../../../src/Fungus/Map';

describe('Map', () => {
  const locationOne = new Location();
  const locationTwo = new Location();

  const subject = new Map({ locations: [locationOne, locationTwo] });

  describe('includes', () => {
    it('should return TRUE if the location received IS in the map', () => {
      const result = subject.includes(locationOne);

      expect(result).toBeTruthy();
    });

    it('should return FALSE if the location received IS NOT in the map', () => {
      const locationThree = new Location();
      const result = subject.includes(locationThree);

      expect(result).toBeFalsy();
    });
  });
});
