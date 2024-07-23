import MapPage from './map/pages/MapPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useRegisterSW } from 'virtual:pwa-register/react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const intervalMS = 60 * 60 * 1000;

  useRegisterSW({
    onRegistered(r) {
      r &&
        setInterval(() => {
          r.update();
        }, intervalMS);
    },
  });

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MapPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
