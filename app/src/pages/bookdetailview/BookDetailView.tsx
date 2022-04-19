import { Book } from 'cremona/dist/Book';
import BookDetailViewDescription from './BookDetailViewDescription';

interface Props {
  newBook: Book;
}

export default function BookDetailView({ newBook }: Props) {
  const book: Book = newBook;
  return (
    <div>
      <BookDetailViewDescription newBook={book} />
    </div>
  );
}
