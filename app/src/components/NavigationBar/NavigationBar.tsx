import { Link } from 'react-router-dom';
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
import { NavAvatar } from './NavAvatar';

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
  return (
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
            <Box sx={{ flexGrow: 5, display: 'flex', justifyContent: 'right' }}>
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
                to="/article"
                color="secondary"
                variant="contained"
                size="large"
              >
                Sälj
              </Button>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
            >
              {/* SEARCH FIELD */}
              <Search>
                <StyledInputBase
                  placeholder="Boktitel/ISBN/Kurskod"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>
            <NavAvatar />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default NavigationBar;
