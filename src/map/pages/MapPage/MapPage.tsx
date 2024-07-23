import Box from '@mui/material/Box';
import ParkingsMap from '@/map/components/ParkingsMap/ParkingsMap.tsx';
import ParkingsTable from '@/map/components/ParkingsTable';
import { useParkings } from '@/map/hooks';
import { LatLngExpression } from 'leaflet';
import { MapContainer } from 'react-leaflet';
import { SharedMapProvider } from '@/map/context';
import { AppBar, Toolbar, Typography } from '@mui/material';
import InstallPWAButton from '@/common/components/InstallPWAButton/InstallPWAButton.tsx';
const BERLIN_COORDINATES = { lat: 52.520008, lng: 13.404954 };

const MapPage = () => {
  const [parkings] = useParkings();

  return (
    <Box className="map-page">
      <SharedMapProvider>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Parking Finder</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <InstallPWAButton />
          </Toolbar>
        </AppBar>
        <MapContainer
          style={{ height: '50vh', width: '100vw' }}
          attributionControl={false}
          className="map-container"
          center={Object.values(BERLIN_COORDINATES) as LatLngExpression}
          zoom={12}
        >
          <ParkingsMap parkings={parkings} />
        </MapContainer>

        <ParkingsTable parkings={parkings} />
      </SharedMapProvider>
    </Box>
  );
};

export default MapPage;
