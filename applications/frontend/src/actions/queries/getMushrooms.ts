import useSWR from 'swr';

import Mushroom from '../../models/Mushroom';

import fetcher from './fetcher';

export default function getMushrooms(): { mushrooms?: Array<Mushroom>; isLoading: boolean; error: Error } {
  const { data, error } = useSWR(`/api/mushrooms`, fetcher);

  return {
    mushrooms: data,
    isLoading: !error && !data,
    error,
  };
}
