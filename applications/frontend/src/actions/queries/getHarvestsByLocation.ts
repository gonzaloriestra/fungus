import useSWR from 'swr';

import Harvests from '../../models/Harvests';

import ClientFetcher from '../clientSide/ClientFetcher';

export default function getHarvestsByLocation({
  locationId,
}): { harvests?: Harvests; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Harvests>(`/harvests?locationId=${locationId}`, ClientFetcher.get);

  return {
    harvests: data,
    isLoading: !error && !data,
    error,
  };
}
