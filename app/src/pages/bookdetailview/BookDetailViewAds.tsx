import {
  Typography,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Container,
} from '@mui/material';
import { useState } from 'react';
import AdAccordion from '../../components/AdAccordion';

function BookDetailViewAds() {
  const [ads] = useState([
    'seller1',
    'seller2',
    'seller3',
    'seller4',
    'seller5',
    'seller6',
    'seller7',
    'seller8',
  ]);

  const [sort, setSort] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <Container
      sx={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '300px',
        flexShrink: 0,
        paddingBottom: '10px',
      }}
    >
      <Container sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flex: 3,
            margin: 'auto',
            marginTop: 0,
            justifyContent: 'start',
          }}
        >
          <Typography variant="h4">Annonser</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'end',
          }}
        >
          <FormControl sx={{ m: 1, mr: 0, minWidth: 95 }}>
            <InputLabel id="sorting-label">Sortera</InputLabel>
            <Select
              labelId="sorting-label"
              id="sorting"
              value={sort}
              label="Sortera"
              onChange={handleChange}
              autoWidth
            >
              <MenuItem value={10}>Lägst pris först</MenuItem>
              <MenuItem value={20}>Högst pris först</MenuItem>
              <MenuItem value={30}>Bäst skick först</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>

      {ads.map((ad) => (
        <AdAccordion ad={ad} />
      ))}
    </Container>
  );
}
export default BookDetailViewAds;
