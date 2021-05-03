import useSWR from 'swr';

import Location from '../models/Location';

import fetcher from './fetcher';

export default function useMyLocation({ id }): { location?: Location; isLoading: boolean; error: Error } {
  const { data, error } = useSWR(`/api/locations/${id}`, fetcher);

  return {
    location: data,
    isLoading: !error && !data,
    error,
  };
}
