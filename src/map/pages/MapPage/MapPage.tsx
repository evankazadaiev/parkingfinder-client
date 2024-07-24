import Box from '@mui/material/Box';
import ParkingsMap from '@/map/components/ParkingsMap/ParkingsMap.tsx';
import ParkingsTable from '@/map/components/ParkingsTable';
import { useParkings } from '@/map/hooks';
import { LatLngExpression } from 'leaflet';
import { MapContainer } from 'react-leaflet';
import { SharedMapProvider } from '@/map/context';
import { AppBar, Button, Snackbar, Toolbar, Typography } from '@mui/material';
import InstallPWAButton from '@/common/components/InstallPWAButton/InstallPWAButton.tsx';
import ShareButton from '@/common/components/ShareButton/ShareButton.tsx';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { useEffect, useRef } from 'react';

const BERLIN_COORDINATES = { lat: 52.520008, lng: 13.404954 };

const MapPage = () => {
  const intervalRef = useRef<NodeJS.Timeout>();
  const intervalMS = 60 * 60 * 1000;

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    offlineReady: [offlineReady],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      if (r) {
        console.log('SW Registered: ' + r);
        intervalRef.current = setInterval(() => {
          r.update();
        }, intervalMS);
      }
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const closePrompt = () => {
    setNeedRefresh(false);
  };
  const handleSWUpdate = () => {
    updateServiceWorker(true);
  };

  const [parkings] = useParkings(needRefresh || offlineReady);

  return (
    <Box className="map-page">
      <SharedMapProvider>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Parkfinder</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <InstallPWAButton />
            <ShareButton />
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
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={needRefresh}
        onClose={closePrompt}
        message="New content available, click on reload button to update."
        action={
          <>
            <Button onClick={handleSWUpdate}>Reload</Button>
            <Button onClick={closePrompt}>Close</Button>
          </>
        }
      />
    </Box>
  );
};

export default MapPage;
