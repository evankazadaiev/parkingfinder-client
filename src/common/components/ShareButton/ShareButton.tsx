import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ShareIcon from '@mui/icons-material/ShareOutlined';

const ShareButton = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isShareAvailable = !!navigator.share;

  const handleClick = () => {
    navigator.share({
      title: 'Parkingfinder - best parking experience!',
      url: window.origin,
      text: 'Join the app!',
    });
  };

  if (!isShareAvailable) {
    return null;
  }

  if (isTablet) {
    return (
      <Button
        onClick={handleClick}
        sx={{ mx: 2, color: 'white', borderColor: 'white', display: 'block' }}
        variant="outlined"
      >
        Share App
      </Button>
    );
  }

  return (
    <IconButton onClick={handleClick} size="large" sx={{ color: 'white', borderColor: 'white', display: 'block' }}>
      <ShareIcon />
    </IconButton>
  );
};

export default ShareButton;
