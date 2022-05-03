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
  Container,
} from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import { mainTheme } from '../../theme';

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
    <Container key={ad}>
      <Accordion
        sx={{
          marginTop: 1,
          '&:hover': {
            bgcolor: mainTheme.palette.secondary.light,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ marginLeft: 1 }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar
            sx={{ margin: 'auto' }}
            alt="Remy Sharp"
            src="../assets/images/bok.png"
          />

          <Stack sx={{ marginLeft: 2 }}>
            <Typography
              variant="h6"
              sx={{ width: '20%', flexShrink: 0, marginBottom: 1 }}
            >
              {ad}
            </Typography>

            <Stack direction="row" spacing={1} sx={{ margin: 'auto' }}>
              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  margin: 'auto',
                }}
              >
                Condition
              </Typography>
            </Stack>
          </Stack>

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
            <Box sx={{ display: 'flex', flex: 5 }}>
              <Stack direction="column">
                <Stack direction="row">
                  <MenuBookTwoToneIcon sx={{ marginRight: 1 }} />
                  <Typography>Condition</Typography>
                </Stack>
                <Stack direction="row" sx={{ marginTop: 1 }}>
                  <ChatBubbleTwoToneIcon sx={{ marginRight: 1 }} />
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </Stack>
              </Stack>
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
              <Button
                variant="contained"
                startIcon={<ContactPageRoundedIcon />}
              >
                Kontakta säljaren
              </Button>
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Container>
  );

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

      {ads.map((ad: any) => createAdItem(ad))}
    </Container>
  );
}
export default BookDetailViewAds;
