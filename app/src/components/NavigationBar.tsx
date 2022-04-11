import { NavLink, Link } from "react-router-dom";
import "./css/NavigationBar.css";
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
} from "@mui/material";
import App from "../App";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.black,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.95),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Pre-MUI we used NavLink to navigate, e.g <NavLink to='/'> link </NavLink>
                    Now we have to import Link from react-router-dom and
                    MUI Button uses the Link component
                */}
            <Button
              sx={{ display: { xs: "none", sm: "block" } }}
              component={Link}
              to=""
            >
              <Typography variant="h6" color="common.white">
                bok
              </Typography>
            </Button>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                component={Link}
                to="/article"
                color="secondary"
                variant="contained"
                size="large"
              >
                Köp
              </Button>
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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Search>
                <StyledInputBase
                  placeholder="Boktitel/ISBN/Kurskod"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              {/*<TextField id="search" label="Sök" variant="outlined" />*/}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open account settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={false}
              >
                {/*settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))*/}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;
/*
        <nav className="nav">
                           <NavLink className='title'
                to="/article">bok</NavLink>
            <div className="links">
                <NavLink className='link'
                to="/article">Köp</NavLink>
                <NavLink className='link'
                to="/article">Sälj</NavLink>
                <NavLink className='link'
                to="/article">Om oss</NavLink>
            </div>
            <div className='rightNav'>
            <form>
                <input
                className="searchBar"
                type="search"/>
            </form>
            <NavLink className='login'
                to="/article">LOGIN</NavLink>
            </div>
            
        </nav>*/
