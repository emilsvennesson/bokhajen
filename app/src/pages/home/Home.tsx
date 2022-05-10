import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Book, CremonaClient } from 'cremona';
import { Fragment, useEffect, useState } from 'react';
import shark from '../../assets/images/shark.png';
import CategoriesGrid from './CategoriesGrid';

const CATEGORIES = ['Populär studentlitteratur', 'Matematik', 'Susvetenskap'];
const GRID_SIZE = 12;
const client = new CremonaClient();

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  let sliceIndex = 0;

  useEffect(() => {
    const getBooks = async () => {
      const cBooks = await client.getBooks(30);
      setBooks(cBooks);
    };
    getBooks();
  }, []);

  return (
    <>
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="header"
          maxWidth="lg"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container sx={{ marginTop: '50px' }}>
            <Grid item xs={12} md={6}>
              <Box width="100%" display="flex" justifyContent="center">
                <Box component="img" sx={{ width: '80%' }} src={shark} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginTop: '55px', padding: 2 }}>
                <Stack spacing={2}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Köp & sälj kurslitteratur på ett smartare sätt
                  </Typography>
                  <Typography variant="h6">
                    Köp dina kursböcker direkt från andra studenter och spara
                    uppåt 70%. När du är klar säljer du enkelt vidare böckerna
                    och tjänar pengar på nolltid.
                  </Typography>
                  <Grid container display="flex">
                    <Grid item xs={12} sm={6} sx={{ padding: 1 }}>
                      <Button
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
      </Box>
      <Box component="main">
        {CATEGORIES.map((name: string) => {
          const carousel = (
            <Fragment key={sliceIndex}>
              <CategoriesGrid
                title={name}
                books={books.slice(sliceIndex, sliceIndex + GRID_SIZE)}
              />
            </Fragment>
          );
          sliceIndex += GRID_SIZE;
          return carousel;
        })}
      </Box>
    </>
  );
}
