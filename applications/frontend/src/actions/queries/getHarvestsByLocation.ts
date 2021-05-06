import useSWR from 'swr';

import Harvest from '../../models/Harvest';

import fetcher from './fetcher';

export default function getHarvestsByLocation({
  locationId,
}): { harvests?: Array<Harvest>; isLoading: boolean; error: Error } {
  const { data, error } = useSWR(`/api/harvests?locationId=${locationId}`, fetcher);

  return {
    harvests: data,
    isLoading: !error && !data,
    error,
  };
}
