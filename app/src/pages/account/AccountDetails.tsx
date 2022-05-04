import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useAuth } from '../../hooks/FBAuthProvider';

export default function AccountDetails() {
  const auth = useAuth();
  return (
    <Container
      sx={{
        marginTop: '80px',
        /* backgroundColor: 'gray', */
        direction: 'row',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          marginTop: '60px',
          width: '200px',
        }}
      >
        <Stack>
          <Button size="large">Mina uppgifter</Button>
          <Button size="large">Mina annonser</Button>
        </Stack>
      </Box>
      <Box
        sx={{
          /* backgroundColor: 'red', */
          marginLeft: '20px',
        }}
      >
        <Box
          sx={{
            /* backgroundColor: 'red', */
            marginBottom: '25px',
          }}
        >
          <Typography variant="h4">Välkommen {auth.user?.email}!</Typography>
        </Box>
        <Box sx={{ display: 'flex', width: '700px' }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={
              {
                /* border: 1, borderColor: 'red'  */
              }
            }
            /* sx={{ border: 1 }} */
          >
            <Grid item xs={8} md={5}>
              <TextField required label="Förnamn" fullWidth />
            </Grid>
            <Grid item xs={8} md={5}>
              <TextField required label="Efternamn" fullWidth />
            </Grid>
            <Grid item xs={8} md={10}>
              <TextField required label="E-mail" fullWidth />
            </Grid>
            <Grid item xs={8} md={5}>
              <TextField required label="Lösenord" fullWidth />
            </Grid>
            <Grid item xs={8} md={5}>
              <TextField required label="Bekräfta lösenord" fullWidth />
            </Grid>
          </Grid>
          <Stack>
            <Avatar
              sx={{ height: '150px', width: '150px', marginBottom: '10px' }}
            />
            <Button size="large">Välj bild</Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
