import APIClient from '../pages/api/APIClient';

import Prediction from '../models/Prediction';

export default async function makePrediction({ date, locationId, mushroomId }): Promise<Prediction> {
  const response = await APIClient.get({
    path: `/predictions?locationId=${locationId}&mushroomId=${mushroomId}&date=${date}`,
  });

  if (!response.ok) {
    throw Error('Sommething happens feching the info!!!');
  }

  return await response.json();
}
