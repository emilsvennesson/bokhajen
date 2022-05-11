import { Box, Container, Divider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AccountNavigation from './AccountNavigation';

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
        <AccountNavigation />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ marginTop: '80px' }} />
      {/* Since we nested the child route in RoutesConfig, we only
      need to tell the parent where to render the child route.
      This is done with React Router's Outlet component */}
      <Outlet />
    </Container>
  );
}
