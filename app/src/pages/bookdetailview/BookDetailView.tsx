import { Grid, Box } from '@mui/material';
import { Book, CremonaClient } from 'cremona';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OverlayCircularProgress from '../../components/OverlayCircularProgress';
import InvalidPage from '../InvalidPage';
import BookDetailViewAds from './BookDetailViewAds';
import BookDetailViewDescription from './BookDetailViewDescription';

const client = new CremonaClient();

export default function BookDetailView() {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

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
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          <BookDetailViewDescription book={book} />
        </Grid>
        <Grid item xs={12} md={5}>
          <BookDetailViewAds bookUid={book.uid} />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <InvalidPage />
  );
}
