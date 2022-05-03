import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Accordion,
  Box,
  Avatar,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

  const createAdItem = (ad: any) => (
    <Box key={ad}>
      <Accordion sx={{ marginTop: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar
            sx={{ marginLeft: 1, marginRight: 1 }}
            alt="Remy Sharp"
            src="../assets/images/bok.png"
          />
          <Typography sx={{ width: '20%', flexShrink: 0, margin: 'auto' }}>
            {ad}
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'start',
              margin: 'auto',
            }}
          >
            Condition
          </Typography>
          <Typography
            sx={{
              marginRight: 1,
              display: 'flex',
              justifyContent: 'end',
              flexGrow: 1,
              margin: 'auto',
            }}
          >
            Pris kr
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column">
            <Box sx={{ display: 'flex', flex: 5, border: 0 }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </Box>
            <Divider sx={{ margin: 1 }} />
            <Box
              sx={{
                display: 'flex',
                flex: 3,
                border: 0,
                justifyContent: 'center',
                margin: 'auto',
                marginBottom: 0,
                marginTop: 1,
              }}
            >
              <Button variant="contained">Kontakta säljaren</Button>
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <Box
      sx={{
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flex: 3,
            margin: 'auto',
            justifyContent: 'start',
          }}
        >
          <Typography variant="h3">Annonser</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'end',
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 95 }}>
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
      </Box>

      {ads.map((ad: any) => createAdItem(ad))}
    </Box>
  );
}
export default BookDetailViewAds;
