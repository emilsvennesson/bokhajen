import { Box, Divider } from '@mui/material';
import { Book, CremonaClient } from 'cremona';
import { Fragment, useEffect, useState } from 'react';
import bok from '../../assets/images/bok.png';
import CategoriesGrid from './CategoriesGrid';

const client = new CremonaClient();

export default function Home() {
  const categories = ['Populär studentlitteratur', 'Matematik', 'Susvetenskap'];
  const [books, setBooks] = useState<Book[]>([]);
  let sliceIndex = 0;

  useEffect(() => {
    const getBooks = async () => {
      const cBooks = await client.getBooks(18);
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
        {/* Header */}
        <Box
          component="header"
          width="100%"
          height={350}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#DFDDDD"
        >
          {/* LOGO */}
          <Box component="img" height={250} src={bok} />
        </Box>
      </Box>
      <Box component="main">
        {categories.map((name: string) => {
          const carousel = (
            <Fragment key={sliceIndex}>
              <CategoriesGrid
                title={name}
                books={books.slice(sliceIndex, sliceIndex + 6)}
              />
              <Divider />
            </Fragment>
          );
          sliceIndex += 6;
          return carousel;
        })}
      </Box>
    </>
  );
}
