import { Grow, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const toTop = () => {
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

    window.addEventListener('scroll', toTop);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', toTop);
    };
  }, [lastScrollY]);

  return (
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
  );
}

export default ScrollToTop;
