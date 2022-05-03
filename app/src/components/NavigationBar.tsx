import { Link } from 'react-router-dom';
import {
  IconButton,
  Button,
  Tooltip,
  Typography,
  Box,
  AppBar,
  Container,
  Toolbar,
  styled,
  alpha,
  InputBase,
  Avatar,
  Menu,
} from '@mui/material';
import { useAuth } from '../hooks/FBAuthProvider';

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

function AccountStatus() {
  const auth = useAuth();

  if (auth.user)
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open account settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="../assets/images/bok.png" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={false}
        />
      </Box>
    );

  return (
    <Box sx={{ flexGrow: 0 }}>
      {/* REGISTRATIONS BUTTON */}
      <Button
        component={Link}
        to="/article"
        color="secondary"
        variant="outlined"
        size="large"
      >
        Registrera
      </Button>
      {/* LOGIN BUTTON */}
      <Button
        component={Link}
        to="/article"
        color="secondary"
        variant="text"
        size="large"
      >
        Logga in
      </Button>
    </Box>
  );
}

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
            <AccountStatus />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default NavigationBar;
