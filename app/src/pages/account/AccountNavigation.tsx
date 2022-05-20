import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AccountNavigation() {
  return (
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
  );
}
