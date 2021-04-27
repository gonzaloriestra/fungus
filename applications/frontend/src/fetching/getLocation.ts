import BackendClient from './BackendClient';

type QueryResponse = {
  data: object;
};

export default function getLocation({ id }): Promise<QueryResponse> {
  return BackendClient.get({ path: `/locations/${id}` });
}