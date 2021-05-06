import useSWR from 'swr';

import Locations from '../../models/Locations';

import fetcher from '../fetcher';

export default function getMyLocations(): { locations?: Locations; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Locations>(`/me/locations`, fetcher.get);

  return {
    locations: data,
    isLoading: !error && !data,
    error,
  };
}
