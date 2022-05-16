import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import shark from '../assets/images/sadshark.png';

export default function InvalidPage() {
  return (
    <Box height="100vh">
      <Container
        maxWidth="sm"
        sx={{
          marginTop: '120px',
        }}
      >
        <Stack>
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            Sidan kunde inte hittas!
          </Typography>
          <Box
            component="img"
            width="300px"
            src={shark}
            sx={{ alignSelf: 'center', marginTop: '20px' }}
          />
          <Container
            maxWidth="sm"
            sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}
          >
            <Button
              sx={{
                width: '300px',
                height: '70px',
                fontSize: '19px',
              }}
              component={Link}
              to="/"
            >
              Tillbaka till Startsidan
            </Button>
          </Container>
        </Stack>
      </Container>
    </Box>
  );
}
