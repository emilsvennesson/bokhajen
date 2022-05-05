import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
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
      <Stack spacing={6} sx={{ marginLeft: '20px' }}>
        <Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', marginBottom: '20px' }}
            >
              Välkommen {auth.user?.email}!
            </Typography>
            <Box sx={{ marginBottom: '20px', width: '450px' }}>
              <Divider textAlign="left">
                <Typography variant="h5" sx={{}}>
                  Mina uppgifter
                </Typography>
              </Divider>
            </Box>
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
              <Grid item xs={8} md={5}>
                <Button variant="contained" size="large">
                  Spara uppgifter
                </Button>
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

        {/* PASSWORD FORM */}
        <Box>
          <Box>
            <Box sx={{ marginBottom: '20px', width: '450px' }}>
              <Divider textAlign="left">
                <Typography variant="h6" sx={{}}>
                  Ändra lösenord
                </Typography>
              </Divider>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', width: '450px' }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={6}>
                <TextField required label="Nuvarande lösenord" fullWidth />
              </Grid>
              <Grid item xs={12} md={6} />
              <Grid item xs={12} md={6}>
                <TextField required label="Nytt lösenord" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField required label="Bekräfta nytt lösenord" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button variant="contained" size="large">
                  Ändra lösenord
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
