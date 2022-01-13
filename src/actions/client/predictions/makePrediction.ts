import useSWR from 'swr';
import ClientFetcher from '../ClientFetcher';

import Prediction from '../../../models/Prediction';

type makePredictionParams = { date: string; locationId: string; mushroomId: string };

export default function makePrediction({ date, locationId, mushroomId }: makePredictionParams): Promise<Prediction> {
  return ClientFetcher.get<Prediction>(`/predictions?locationId=${locationId}&mushroomId=${mushroomId}&date=${date}`);
}
