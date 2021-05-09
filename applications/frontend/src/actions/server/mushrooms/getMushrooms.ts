import Harvests from '../../../models/Harvests';

import ServerFetcher from '../ServerFetcher';

export default function getMushrooms({ accessToken }): Promise<Harvests> {
  return ServerFetcher.get<Harvests>('/mushrooms', {
    accessToken,
  });
}
