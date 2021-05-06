import useSWR from 'swr';

import Harvests from '../../models/Harvests';

import fetcher from '../fetcher';

export default function getHarvestsByLocation({
  locationId,
}): { harvests?: Harvests; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Harvests>(`/harvests?locationId=${locationId}`, fetcher.get);

  return {
    harvests: data,
    isLoading: !error && !data,
    error,
  };
}
