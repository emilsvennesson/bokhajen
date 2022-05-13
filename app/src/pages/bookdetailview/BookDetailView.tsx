import { Container, Box } from '@mui/material';
import { Book, CremonaClient } from 'cremona';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import OverlayCircularProgress from '../../components/OverlayCircularProgress';
import InvalidPage from '../InvalidPage';
import BookDetailViewAds from './BookDetailViewAds';
import BookDetailViewDescription from './BookDetailViewDescription';

const client = new CremonaClient();

export default function BookDetailView() {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const lg = useMediaQuery('(min-width:1300px)');

  let { uid } = useParams();
  if (!uid) uid = ''; // this is sus, but it'll do

  // eslint-disable-next-line radix
  const uidInt = parseInt(uid);
  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      let cBooks: Book[] = [];
      try {
        cBooks = await client.getBook(uidInt);
      } catch (e) {
        // do some cringe
      }
      if (cBooks[0]) {
        // do some cringe
        setBook(cBooks[0]);
      }
      setLoading(false);
    };
    getBook();
  }, [uidInt]);

  if (loading) return <OverlayCircularProgress />;

  return book ? (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: '50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: lg ? 'row' : 'column',
        }}
      >
        <BookDetailViewDescription book={book} />
        <BookDetailViewAds bookUid={book.uid} />
      </Box>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} xl={8}>
          <BookDetailViewDescription book={book} />
        </Grid>
        <Grid item xs={12} xl={4}>
          <BookDetailViewAds bookUid={book.uid} />
        </Grid>
      </Grid> */}
    </Container>
  ) : (
    <InvalidPage />
  );
}
