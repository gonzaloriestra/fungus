import useSWR from 'swr';

import Location from '../../models/Location';

import APIClient from '../APIClient';

export default function getLocation({ id }): { location?: Location; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Location>(`/locations/${id}`, APIClient.get);

  return {
    location: data,
    isLoading: !error && !data,
    error,
  };
}
