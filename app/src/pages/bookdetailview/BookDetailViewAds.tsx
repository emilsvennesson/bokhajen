import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';
import { useState } from 'react';

function BookDetailViewAds() {
  const [ads] = useState(['ad1', 'ad2', 'ad3', 'ad4', 'ad5']);

  const createAdItem = (ad: any) => (
    <Box key={ad}>
      <ListItem sx={{ padding: 0.5, width: 350 }}>
        <Box sx={{ border: 1, width: '100%' }}>
          <ListItemButton>
            <ListItemText primary={ad} />
          </ListItemButton>
        </Box>
      </ListItem>
      <Divider />
    </Box>
  );

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'white',
        border: 1,
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <nav>
        <List>{ads.map((ad: any) => createAdItem(ad))}</List>
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
      </nav>
    </Box>
  );
}

export default BookDetailViewAds;
