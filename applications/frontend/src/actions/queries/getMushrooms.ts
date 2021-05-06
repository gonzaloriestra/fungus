import useSWR from 'swr';

import Mushrooms from '../../models/Mushrooms';

import APIClient from '../APIClient';

export default function getMushrooms(): { mushrooms?: Mushrooms; isLoading: boolean; error: Error } {
  const { data, error } = useSWR<Mushrooms>(`/mushrooms`, APIClient.get);

  return {
    mushrooms: data,
    isLoading: !error && !data,
    error,
  };
}
