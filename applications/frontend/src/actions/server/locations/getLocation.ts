import Harvests from '../../../models/Harvests';

import ServerFetcher from '../ServerFetcher';

export default function getLocation({ id, accessToken }): Promise<Harvests> {
  return ServerFetcher.get<Harvests>(`/locations/${id}`, {
    accessToken,
  });
}
