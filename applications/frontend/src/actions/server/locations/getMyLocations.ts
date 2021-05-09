import Locations from '../../../models/Locations';

import ServerFetcher from '../ServerFetcher';

export default function getMyLocations({ accessToken }): Promise<Locations> {
  return ServerFetcher.get<Locations>('/me/locations', {
    accessToken,
  });
}
