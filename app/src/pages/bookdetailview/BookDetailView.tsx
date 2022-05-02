import { Container } from '@mui/material';
import { Book } from 'cremona/dist/Book';
import BookDetailViewAds from './BookDetailViewAds';
import BookDetailViewDescription from './BookDetailViewDescription';

interface Props {
  newBook: Book;
}

export default function BookDetailView({ newBook }: Props) {
  const book: Book = newBook;
  return (
    <div>
      <Container sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row' }}>
        <Container sx={{ flexGrow: 1, width: '50%' }}>
          <BookDetailViewDescription newBook={book} />
        </Container>
        <Container sx={{ flexGrow: 1, width: '50%' }}>
          <BookDetailViewAds />
        </Container>
      </Container>
    </div>
  );
}
