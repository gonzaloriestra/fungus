import useSWR from 'swr';
import ClientFetcher from '../ClientFetcher';

import Prediction from '../../../models/Prediction';

export default function makePrediction({ date, locationId, mushroomId }): Promise<Prediction> {
  return ClientFetcher.get<Prediction>(`/predictions?locationId=${locationId}&mushroomId=${mushroomId}&date=${date}`);
}
