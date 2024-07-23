import { useEffect, useState } from 'react';
import { fetchParkings } from '../api/maps.ts';
import { CarParking } from '@/common/types';

export const useParkings = () => {
  const [parkings, setParkings] = useState<CarParking[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchParkings();

      setParkings(res);
    })();
  }, []);

  return [parkings];
};
