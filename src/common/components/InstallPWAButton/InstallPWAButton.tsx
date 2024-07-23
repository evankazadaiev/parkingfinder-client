import { MouseEvent, useEffect, useState } from 'react';
import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import InstallIcon from '@mui/icons-material/InstallMobile';

const InstallPwaButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent | null>(null);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();

      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // @ts-ignore
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }

  if (isTablet) {
    return (
      <Button
        onClick={handleClick}
        sx={{ mx: 2, color: 'white', borderColor: 'white', display: 'block' }}
        variant="outlined"
        id="install-app-button"
      >
        Install App
      </Button>
    );
  }

  return (
    <IconButton
      onClick={handleClick}
      size="large"
      sx={{ color: 'white', borderColor: 'white', display: 'block' }}
      id="install-app-button"
    >
      <InstallIcon />
    </IconButton>
  );
};

export default InstallPwaButton;
