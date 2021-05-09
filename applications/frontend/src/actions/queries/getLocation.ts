import useSWR from 'swr';

import Location from '../../models/Location';

import ClientFetcher from '../clientSide/ClientFetcher';

export default function getLocation({ id }): { location?: Location; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Location>(`/locations/${id}`, ClientFetcher.get);

  return {
    location: data,
    isLoading: !error && !data,
    error,
  };
}
