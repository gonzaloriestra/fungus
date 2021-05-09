import Harvests from '../../../models/Harvests';

import ServerFetcher from '../ServerFetcher';

export default function getByLocation({ locationId, accessToken }): Promise<Harvests> {
  return ServerFetcher.get<Harvests>(`/locations/${locationId}/harvests`, {
    accessToken,
  });
}
