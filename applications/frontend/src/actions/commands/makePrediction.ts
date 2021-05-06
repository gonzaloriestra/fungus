import APIClient from '../APIClient';

import Prediction from '../../models/Prediction';

export default async function makePrediction({ date, locationId, mushroomId }): Promise<Prediction> {
  return APIClient.get<Prediction>(`/predictions?locationId=${locationId}&mushroomId=${mushroomId}&date=${date}`);
}
