import Harvests from '../../../models/Harvests';

import ServerFetcher from '../ServerFetcher';

export default function getByLocation({ accessToken }): Promise<Harvests> {
  return ServerFetcher.get<Harvests>('/me/locations', {
    accessToken,
  });
}
