import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Typography,
  Box,
  AppBar,
  Container,
  Toolbar,
  styled,
  alpha,
  InputBase,
} from '@mui/material';
import SearchModal from './SearchModal';
import NavAvatar from './NavAvatar';
import { useAuth } from '../../hooks/FBAuthProvider';

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
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
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

  const auth = useAuth();
  const sellNavigation = () => {
    if (auth.user) return '/sell';
    return '/login';
  };

  const handleChangedSearchQuery = (query: string) => {
    if (query) {
      setSearchModalOpen(true);
    } else {
      setSearchModalOpen(false);
    }
    setSearchQuery(query);
  };

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
          navigate(`/book/${book.uid}`, { replace: true });
        }}
      />

      <Box component="nav" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Pre-MUI we used NavLink to navigate, e.g <NavLink to='/'> link </NavLink>
                    Now we have to import Link from react-router-dom and
                    MUI Button uses the Link component
                */}
              {/* LOGO/ESCAPE HATCH BUTTON */}
              <Button sx={{ display: 'block' }} component={Link} to="">
                <Typography variant="h6" color="common.white">
                  bok
                </Typography>
              </Button>

              {/* BUY BUTTON */}
              <Box
                sx={{ flexGrow: 5, display: 'flex', justifyContent: 'right' }}
              >
                <Button
                  component={Link}
                  to="/article"
                  color="secondary"
                  variant="contained"
                  size="large"
                >
                  Köp
                </Button>
                {/* SELL BUTTON */}
                <Button
                  component={Link}
                  to={sellNavigation()}
                  color="secondary"
                  variant="contained"
                  size="large"
                >
                  Sälj
                </Button>

                {/* SEARCH FIELD */}
                <Search>
                  <StyledInputBase
                    placeholder="Boktitel/ISBN/Kurskod"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchModalOpen ? '' : searchQuery}
                    onChange={(e) => handleChangedSearchQuery(e.target.value)}
                    onClick={() => {
                      if (searchQuery && !searchModalOpen) {
                        setSearchModalOpen(true);
                      }
                    }}
                  />
                </Search>
              </Box>
              <NavAvatar />
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
export default NavigationBar;
