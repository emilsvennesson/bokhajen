import { Container, Box } from '@mui/material';
import { Book } from 'cremona';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import OverlayCircularProgress from '../../components/OverlayCircularProgress';
import InvalidPage from '../InvalidPage';
import BookDetailViewAds from './BookDetailViewAds';
import BookDetailViewDescription from './BookDetailViewDescription';
import CremonaService from '../../services/CremonaService';

export default function BookDetailView() {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const lg = useMediaQuery('(min-width:1300px)');

  let { uid } = useParams();
  if (!uid) uid = ''; // this is sus, but it'll do

  const uidInt = parseInt(uid, 10);
  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      let cBook: Book;
      try {
        cBook = await CremonaService.getBook(uidInt);
        setBook(cBook);
      } catch (e) {
        // do some cringe
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
        mb: '100px',
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
    </Container>
  ) : (
    <InvalidPage />
  );
}
