export interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

export interface NavigationUrls {
  google_maps: string;
  apple_maps: string;
  waze: string;
}

export interface CarParking {
  id: number;
  name: string;
  location: Location;
  type: 'Free' | 'Paid';
  price_per_hour?: number;
  capacity: number;
  available_spots: number;
  amenities: string[];
  navigation_urls: NavigationUrls;
}

export interface ParkingList {
  car_parkings: CarParking[];
}
