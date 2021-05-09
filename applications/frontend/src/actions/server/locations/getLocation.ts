import Location from '../../../models/Location';

import ServerFetcher from '../ServerFetcher';

export default function getLocation({ id, accessToken }): Promise<Location> {
  return ServerFetcher.get<Location>(`/locations/${id}`, {
    accessToken,
  });
}
