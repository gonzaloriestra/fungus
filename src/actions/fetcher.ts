type buildHeadersParams = {
  accessToken?: string;
  body?: object;
};

function buildHeaders({ accessToken }: buildHeadersParams = {}): HeadersInit {
  return accessToken ? { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } : {};
}

export default function fetcher({ host }: { host: string }) {
  return {
    async get<T>(path: string, { accessToken }: buildHeadersParams = {}): Promise<T> {
      const response = await fetch(`${host}${path}`, {
        method: 'GET',
        headers: buildHeaders({ accessToken }),
      });

      if (!response.ok) {
        // To-Do custom exception here
        throw Error('Something happens fetching the info!!!');
      }

      return await response.json();
    },
    async put(path: string, { body = {}, accessToken }: buildHeadersParams = {}): Promise<void> {
      const response = await fetch(`${host}${path}`, {
        method: 'PUT',
        headers: buildHeaders({ accessToken }),
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        // To-Do custom exception here
        throw Error('Sommething happens feching the info!!!');
      }
    },
  };
}
