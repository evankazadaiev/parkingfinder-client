import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ParkIcon from '@mui/icons-material/Park';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { SvgIconComponent } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export const amenityIconMap = {
  'EV Charging': ElectricCarIcon,
  'Handicapped Accessible': AccessibleIcon,
  '24/7 Access': AccessTimeIcon,
  'Near Park': ParkIcon,
  'Covered Parking': LocalParkingIcon,
};

interface NavigationIconMap {
  [key: string]: SvgIconComponent;
}

export const navigationIconMap: NavigationIconMap = {
  google_maps: GoogleIcon,
  apple_maps: AppleIcon,
  waze: DirectionsCarIcon,
};
