import useSWR from 'swr';

import Mushrooms from '../../models/Mushrooms';

import fetcher from '../fetcher';

export default function getMushrooms(): { mushrooms?: Mushrooms; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Mushrooms>(`/mushrooms`, fetcher.get);

  return {
    mushrooms: data,
    isLoading: !error && !data,
    error,
  };
}
