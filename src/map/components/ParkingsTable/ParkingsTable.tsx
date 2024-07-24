import { useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CarParking, NavigationUrls } from '@/common/types';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { LatLngExpression } from 'leaflet';
import { useSharedMap } from '@/map/context';
import { amenityIconMap, navigationIconMap } from '@/common/constants';

interface IParkingsTableProps {
  parkings: CarParking[];
}

const ParkingsTable = ({ parkings }: IParkingsTableProps) => {
  const { mapInstance } = useSharedMap();

  const handleLocationClick = (center: LatLngExpression) => {
    if (mapInstance) {
      mapInstance.setView(center, 15);
    }
  };

  return (
    <Box id="table-container">
      <DenseTable onLocationClick={handleLocationClick} parkings={parkings} />
    </Box>
  );
};

export default ParkingsTable;

interface IDenseTableProps {
  onLocationClick: (center: LatLngExpression) => void;
  parkings: CarParking[];
}
export function DenseTable({ parkings, onLocationClick }: IDenseTableProps) {
  const rows = useMemo(() => {
    return parkings.map((item) => ({
      name: item.name,
      type: item.type,
      location: item.location,
      amenities: item.amenities,
      navigation: item.navigation_urls,
    }));
  }, [parkings]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Amenities</TableCell>
            <TableCell align="right">Directions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell
                sx={{ cursor: 'pointer', color: (theme) => theme.palette.info.main }}
                onClick={() => onLocationClick({ lat: row.location.latitude, lng: row.location.longitude })}
                align="right"
              >
                {row.location.address}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">
                {row.amenities.map((amenity) => {
                  const IconComponent = amenityIconMap[amenity as keyof typeof amenityIconMap] || LocalParkingIcon;

                  return <IconComponent key={`${amenity} - ${row.name}`} color="info" />;
                })}
              </TableCell>
              <TableCell align="right">
                {Object.keys(row.navigation).map((key) => {
                  const IconComponent = navigationIconMap[key];

                  return (
                    <a key={key} href={row.navigation[key as keyof NavigationUrls] as string}>
                      <IconComponent color="info" />
                    </a>
                  );
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
