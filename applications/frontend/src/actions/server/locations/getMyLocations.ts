import Harvests from '../../../models/Harvests';

import ServerFetcher from '../ServerFetcher';

export default function getMyLocations({ accessToken }): Promise<Harvests> {
  return ServerFetcher.get<Harvests>('/me/locations', {
    accessToken,
  });
}
