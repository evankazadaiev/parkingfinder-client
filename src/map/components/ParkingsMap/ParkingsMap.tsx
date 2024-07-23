import { TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { CarParking, NavigationUrls } from '@/common/types';
import { useMap } from 'react-leaflet/hooks';
import { useSharedMap } from '@/map/context';
import { Divider, Typography } from '@mui/material';
import { navigationIconMap } from '@/common/constants';
import 'leaflet/dist/leaflet.css';
import './ParkingsMap.scss';

interface IParkingsMapContainerProps {
  parkings: CarParking[];
}

const ParkingsMapContainer = ({ parkings }: IParkingsMapContainerProps) => {
  const map = useMap();
  const { setMapInstance } = useSharedMap();

  useEffect(() => {
    setMapInstance(map);
  }, [map, setMapInstance]);

  return (
    <Box>
      <ParkingsMap parkings={parkings} />
    </Box>
  );
};

interface IParkingsMapProps {
  parkings: CarParking[];
}

const ParkingsMap = ({ parkings }: IParkingsMapProps) => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {parkings.map((parking) => (
        <Marker position={[parking.location.latitude, parking.location.longitude] as LatLngExpression}>
          <Popup>
            <Typography variant="subtitle1">{parking.name}</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="subtitle2">Get directions:</Typography>
            <Typography variant="h6">
              {Object.keys(parking.navigation_urls).map((key) => {
                const IconComponent = navigationIconMap[key];

                return (
                  <a key={key} href={parking.navigation_urls[key as keyof NavigationUrls] as string}>
                    <IconComponent color="info" />
                  </a>
                );
              })}
            </Typography>
          </Popup>
        </Marker>
      ))}
    </Box>
  );
};
export default ParkingsMapContainer;
