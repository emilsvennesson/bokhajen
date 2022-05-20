import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import shark from '../../assets/images/shark.png';

export default function HomeBanner() {
  return (
    <Box
      component="header"
      maxWidth="lg"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container sx={{ marginTop: '110px' }}>
        <Grid item xs={12} md={6}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              component="img"
              maxWidth="sm"
              sx={{ width: '70%' }}
              src={shark}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: '55px', padding: 2 }}>
            <Stack spacing={2}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Köp & sälj kurslitteratur på ett smartare sätt
              </Typography>
              <Typography variant="h6">
                Köp dina kursböcker direkt från andra studenter och spara uppåt
                70%. När du är klar säljer du enkelt vidare böckerna och tjänar
                pengar på nolltid.
              </Typography>
              <Grid container display="flex">
                <Grid item xs={12} sm={6} sx={{ padding: 1 }}>
                  <Button
                    component={Link}
                    to="/books"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                  >
                    Köp böcker
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ padding: 1 }}>
                  <Button
                    component={Link}
                    to="/sell"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                  >
                    Sälj böcker
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
