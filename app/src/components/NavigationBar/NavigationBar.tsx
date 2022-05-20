import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Box,
  AppBar,
  Container,
  Toolbar,
  styled,
  alpha,
  InputBase,
  Stack,
  Slide,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchModal from './SearchModal';
import NavAvatar from './NavAvatar';
import bokWhite from '../../assets/images/bokWhite.png';

const HEIGHT = '75px';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.black,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.95),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

function NavigationBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const sellNavigation = () => '/sell';
  const handleChangedSearchQuery = (query: string) => {
    if (query) {
      setSearchModalOpen(true);
    } else {
      setSearchModalOpen(false);
    }
    setSearchQuery(query);
  };

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY >= 500) {
          // if scroll down hide the navbar
          setShow(false);
        } else {
          // if scroll up show the navbar
          setShow(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <SearchModal
        query={searchQuery}
        onChange={handleChangedSearchQuery}
        open={searchModalOpen}
        onClose={() => {
          setSearchModalOpen(false);
        }}
        onBookClick={(book) => {
          navigate(`/books/${book.uid}`, { replace: true });
          setSearchModalOpen(false);
          setSearchQuery('');
        }}
      />

      <Box
        component="nav"
        maxWidth="100%"
        sx={{
          flexGrow: 1,
        }}
      >
        <Slide direction="down" in={show} mountOnEnter unmountOnExit>
          <AppBar position="fixed" sx={{ width: '100%', height: HEIGHT }}>
            <Container maxWidth="xl" sx={{ width: '100%' }} disableGutters>
              <Toolbar disableGutters>
                {/* Pre-MUI we used NavLink to navigate, e.g <NavLink to='/'> link </NavLink>
                    Now we have to import Link from react-router-dom and
                    MUI Button uses the Link component
                */}

                {/* LOGO/ESCAPE HATCH BUTTON */}
                <Stack
                  sx={{
                    flexGrow: 1,

                    alignItems: 'center',
                  }}
                  justifyContent="center"
                  direction="row"
                  flexWrap="wrap"
                >
                  <Box
                    component={Link}
                    to=""
                    flexGrow={1}
                    minWidth="150px"
                    display="flex"
                    justifyContent="center"
                  >
                    <Box component="img" src={bokWhite} width="100px" />
                  </Box>
                  {/* SEARCH FIELD */}
                  <Box flexGrow={2} minWidth="300px" maxWidth="80%" margin={1}>
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>

                      <StyledInputBase
                        placeholder="Boktitel/ISBN/Kurskod"
                        inputProps={{ 'aria-label': 'search' }}
                        value={searchModalOpen ? '' : searchQuery}
                        onChange={(e) =>
                          handleChangedSearchQuery(e.target.value)
                        }
                        onClick={() => {
                          if (searchQuery && !searchModalOpen) {
                            setSearchModalOpen(true);
                          }
                        }}
                        fullWidth
                      />
                    </Search>
                  </Box>
                  {/* SELL BUTTON */}
                  <Stack
                    minWidth="400px"
                    flexGrow={0.5}
                    justifyContent="center"
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      component={Link}
                      to={sellNavigation()}
                      color="secondary"
                      size="large"
                      sx={{
                        color: 'white',
                        '&:hover': { color: 'darkgrey' },
                        fontWeight: 'bold',
                      }}
                    >
                      SÄLJ BOK
                    </Button>
                    <Box>
                      <NavAvatar />
                    </Box>
                  </Stack>
                </Stack>
              </Toolbar>
            </Container>
          </AppBar>
        </Slide>
      </Box>
      <Box height={HEIGHT} />
    </>
  );
}
export default NavigationBar;
