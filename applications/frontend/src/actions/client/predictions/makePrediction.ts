import ClientFetcher from '../ClientFetcher';

import Prediction from '../../../models/Prediction';

export default async function makePrediction({ date, locationId, mushroomId }): Promise<Prediction> {
  return ClientFetcher.get<Prediction>(`/predictions?locationId=${locationId}&mushroomId=${mushroomId}&date=${date}`);
}
