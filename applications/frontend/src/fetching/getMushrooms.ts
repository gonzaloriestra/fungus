import BackendClient from './BackendClient';

type QueryResponse = {
  data: object;
};

export default function getMushrooms(): Promise<QueryResponse> {
  return BackendClient.get({ path: `/mushrooms` });
}
