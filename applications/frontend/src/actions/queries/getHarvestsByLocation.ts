import useSWR from 'swr';

import Harvests from '../../models/Harvests';

import APIClient from '../APIClient';

export default function getHarvestsByLocation({
  locationId,
}): { harvests?: Harvests; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Harvests>(`/harvests?locationId=${locationId}`, APIClient.get);

  return {
    harvests: data,
    isLoading: !error && !data,
    error,
  };
}
