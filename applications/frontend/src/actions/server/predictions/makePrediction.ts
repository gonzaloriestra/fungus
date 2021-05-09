import Prediction from '../../../models/Prediction';

import ServerFetcher from '../ServerFetcher';

export default function makePrediction({ locationId, mushroomId, date, accessToken }): Promise<Prediction> {
  return ServerFetcher.get<Prediction>(`/locations/${locationId}/mushrooms/${mushroomId}/predictions?date=${date}`, {
    accessToken,
  });
}
