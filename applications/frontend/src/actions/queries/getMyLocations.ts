import useSWR from 'swr';

import Locations from '../../models/Locations';

import APIClient from '../APIClient';

export default function getMyLocations(): { locations?: Locations; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Locations>(`/me/locations`, APIClient.get);

  return {
    locations: data,
    isLoading: !error && !data,
    error,
  };
}
