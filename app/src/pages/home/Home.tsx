import { Box, Grow, IconButton } from '@mui/material';
import { Book } from 'cremona';
import { Fragment, useEffect, useState } from 'react';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import CremonaService from '../../services/CremonaService';
import CategoriesGrid from './CategoriesGrid';
import HomeBanner from './HomeBanner';

const CATEGORIES = ['Populär studentlitteratur', 'Matematik', 'Susvetenskap'];
const GRID_SIZE = 12;

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  let sliceIndex = 0;

  useEffect(() => {
    const getBooks = async () => {
      const cBooks = await CremonaService.getBooks(30);
      setBooks(cBooks);
    };
    getBooks();
  }, []);

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const scrollToTop = () => {
      if (typeof window !== 'undefined') {
        if (
          window.scrollY >= window.innerHeight &&
          lastScrollY >= window.innerHeight
        ) {
          // if scroll down hide the navbar
          setShow(true);
        } else {
          // if scroll up show the navbar
          setShow(false);
        }
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', scrollToTop);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', scrollToTop);
    };
  }, [lastScrollY]);

  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <HomeBanner />
      <Box component="main" sx={{ marginTop: '30px' }}>
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
      <Grow in={show}>
        <IconButton
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          sx={{
            position: 'fixed',
            right: 20,
            bottom: 20,
          }}
        >
          <ArrowUpwardOutlinedIcon />
        </IconButton>
      </Grow>
    </Box>
  );
}
