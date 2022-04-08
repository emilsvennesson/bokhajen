import { NavLink, Link } from "react-router-dom";
import './css/NavigationBar.css'
import { Stack, Button, TextField, ButtonGroup, Box, AppBar, Container, Toolbar} from "@mui/material";
import App from "../App";

const NavigationBar = () => {
    return (
        <AppBar position='static'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                {/* Pre-MUI we used NavLink to navigate, e.g <NavLink to='/'> link </NavLink>
                    Now we have to import Link from react-router-dom and
                    MUI Button uses the Link component
                */}
                <Button component={Link} to='' >
                    bok
                </Button>

                <Button component={Link} to="/article"
                color='secondary' variant='contained' size='large'>
                    Köp
                </Button>
                <Button component={Link} to="/article"
                color='secondary' variant='contained' size='large'>
                    Sälj
                </Button>
                <TextField id="outlined-basic" label="Sök" variant="outlined" />

                </Toolbar>

            </Container>

        </AppBar>
    );
}
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

