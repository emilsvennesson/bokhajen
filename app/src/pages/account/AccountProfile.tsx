import { Box, Button, Container, Divider, Stack } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

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
          <Button
            component={Link}
            to="details"
            size="large"
            sx={{ fontWeight: 'bold', fontSize: '16px' }}
          >
            Mina uppgifter
          </Button>
          <Button component={Link} to="ads" size="large">
            Mina annonser
          </Button>
        </Stack>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ marginTop: '80px' }} />
      {/* Since we nested the child route in RoutesConfig, we only
      need to tell the parent where to render the child route.
      This is done with React Router's Outlet component */}
      <Outlet />
    </Container>
  );
}
