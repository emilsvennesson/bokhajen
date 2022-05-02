import {
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Container,
  Avatar,
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </Box>
  );

  return (
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {ads.map((ad: any) => createAdItem(ad))}
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          sx={{
            position: 'fixed',
            bottom: '0',
            marginBottom: 1,
          }}
        >
          Sälj denna bok
        </Button>
      </Container>
    </Box>
  );
}

export default BookDetailViewAds;
