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
import { useState } from 'react';
import { useAuth } from '../../hooks/FBAuthProvider';

export default function AccountDetails() {
  const auth = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(auth.user?.phoneNumber);

  const SavePassword = () => {
    if (newPassword === confirmNewPassword) console.log('saved password!');
  };

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
      <Stack spacing={4} sx={{ marginLeft: '20px' }}>
        <Box>
          <Box>
            {/* WELCOME MESSAGE */}
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
              {/* FIRST NAME TEXTFIELD */}
              <Grid item xs={8} md={5}>
                <TextField
                  id="firstname"
                  required
                  label="Förnamn"
                  fullWidth
                  defaultValue={auth.user?.displayName}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              {/* LAST NAME TEXTFIELD */}
              <Grid item xs={8} md={5}>
                <TextField
                  id="lastname"
                  required
                  label="Efternamn"
                  fullWidth
                  defaultValue={auth.user?.displayName}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              {/* Phonenumber */}
              <Grid item xs={8} md={5}>
                <TextField
                  id="phonenumber"
                  defaultValue={auth.user?.phoneNumber}
                  value={phoneNumber || ''}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  label="Telefonnummer"
                  fullWidth
                />
              </Grid>
              {/* E-mail */}
              <Grid item xs={8} md={5}>
                <TextField
                  required
                  id="email"
                  value={auth.user?.email || ''}
                  label="E-mail"
                  fullWidth
                  disabled
                />
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
                <TextField
                  required
                  label="Nuvarande lösenord"
                  fullWidth
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6} />
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  label="Nytt lösenord"
                  fullWidth
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  label="Bekräfta nytt lösenord"
                  fullWidth
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button variant="contained" size="large" onClick={SavePassword}>
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
