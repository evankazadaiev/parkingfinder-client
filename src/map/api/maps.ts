import { http } from '@/common/data_sources/api/http.ts';
import { CarParking } from '@/common/types';

export const fetchParkings = async (): Promise<CarParking[]> => {
  try {
    console.log('GET');
    const res = await http.get('/api/car_parkings');
    return res.data;
  } catch (e) {
    console.log('Error fetching parkings ', e);

    return [];
  }
};
