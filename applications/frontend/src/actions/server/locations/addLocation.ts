import ServerFetcher from '../ServerFetcher';

export default async function addHarvest({ id, body, accessToken }): Promise<void> {
  return ServerFetcher.put(`/locations/${id}`, {
    body,
    accessToken,
  });
}
