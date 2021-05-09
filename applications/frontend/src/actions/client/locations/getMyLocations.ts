import useSWR from 'swr';

import Locations from '../../../models/Locations';

import ClientFetcher from '../ClientFetcher';

export default function getMyLocations(): { locations?: Locations; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Locations>(`/me/locations`, ClientFetcher.get);

  return {
    locations: data,
    isLoading: !error && !data,
    error,
  };
}
