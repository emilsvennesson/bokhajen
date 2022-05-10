import { Box } from '@mui/material';
import { Book, CremonaClient } from 'cremona';
import { Fragment, useEffect, useState } from 'react';
import CategoriesGrid from './CategoriesGrid';
import HomeBanner from './HomeBanner';

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
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <HomeBanner />
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
    </Box>
  );
}
