import { useEffect, useState } from 'react';
import { fetchParkings } from '../api/maps.ts';
import { CarParking } from '@/common/types';

export const useParkings = (needRefresh: boolean) => {
  const [parkings, setParkings] = useState<CarParking[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchParkings();

      setParkings(res);
    })();
  }, [needRefresh]);

  return [parkings];
};
