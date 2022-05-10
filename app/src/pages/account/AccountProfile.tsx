import { Box, Button, Container, Divider, Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import AccountDetails from './AccountDetails';

export default function AccountProfile() {
  return (
    <Container
      sx={{
        marginTop: '70px',
        /* backgroundColor: 'gray', */
        direction: 'row',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          marginTop: '80px',
          width: '200px',
        }}
      >
        <Stack>
          <Button size="large" sx={{ fontWeight: 'bold', fontSize: '16px' }}>
            Mina uppgifter
          </Button>
          <Button size="large">Mina annonser</Button>
        </Stack>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ marginTop: '80px' }} />
      <Routes>
        <Route path="details" element={<AccountDetails />} />
      </Routes>
    </Container>
  );
}
