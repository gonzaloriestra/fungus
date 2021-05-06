import useSWR from 'swr';

import Location from '../../models/Location';

import fetcher from '../fetcher';

export default function getLocation({ id }): { location?: Location; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Location>(`/locations/${id}`, fetcher.get);

  return {
    location: data,
    isLoading: !error && !data,
    error,
  };
}
