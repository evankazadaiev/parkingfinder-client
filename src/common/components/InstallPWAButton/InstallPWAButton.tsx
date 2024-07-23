import { MouseEvent, useEffect, useState } from 'react';
import { Button } from '@mui/material';

const InstallPwaButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent | null>(null);

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

  return (
    <Button
      onClick={handleClick}
      sx={{ my: 2, color: 'white', borderColor: 'white', display: 'block' }}
      variant="outlined"
      id="install-app-button"
    >
      Install App
    </Button>
  );
};

export default InstallPwaButton;
