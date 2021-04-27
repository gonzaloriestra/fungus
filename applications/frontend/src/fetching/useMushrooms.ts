import useSWR from 'swr';

import fetcher from './fetcher';

// To-Do Model of mushrooms type NewHarvestProps = { mushrooms: Array<{ id: string; scientificName: string }> };
export default function (): { mushrooms?: Array<object>; isLoading: boolean; error: Error } {
  const { data, error } = useSWR(`/api/mushrooms`, fetcher);

  return {
    mushrooms: data,
    isLoading: !error && !data,
    error,
  };
}
