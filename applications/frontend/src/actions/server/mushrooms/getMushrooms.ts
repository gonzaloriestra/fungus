import Mushrooms from '../../../models/Mushrooms';

import ServerFetcher from '../ServerFetcher';

export default function getMushrooms({ accessToken }): Promise<Mushrooms> {
  return ServerFetcher.get<Mushrooms>('/mushrooms', {
    accessToken,
  });
}
