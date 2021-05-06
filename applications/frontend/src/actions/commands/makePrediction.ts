import fetcher from '../fetcher';

import Prediction from '../../models/Prediction';

export default async function makePrediction({ date, locationId, mushroomId }): Promise<Prediction> {
  return fetcher.get<Prediction>(`/predictions?locationId=${locationId}&mushroomId=${mushroomId}&date=${date}`);
}
