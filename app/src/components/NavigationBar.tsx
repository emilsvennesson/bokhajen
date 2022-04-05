import { NavLink } from "react-router-dom";
import './css/NavigationBar.css'

const NavigationBar = () => {

    return (
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
            
        </nav>
    );
}
export default NavigationBar;
