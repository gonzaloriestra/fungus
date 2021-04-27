import useSWR from 'swr';

import Location from '../models/Location';

import fetcher from './fetcher';

export default function (): { locations?: Array<Location>; isLoading: boolean; error: Error } {
  const { data, error } = useSWR(`/api/me/locations`, fetcher);

  return {
    locations: data,
    isLoading: !error && !data,
    error,
  };
}
