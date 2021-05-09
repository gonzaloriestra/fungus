import useSWR from 'swr';

import Mushrooms from '../../models/Mushrooms';

import ClientFetcher from '../clientSide/ClientFetcher';

export default function getMushrooms(): { mushrooms?: Mushrooms; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Mushrooms>(`/mushrooms`, ClientFetcher.get);

  return {
    mushrooms: data,
    isLoading: !error && !data,
    error,
  };
}
