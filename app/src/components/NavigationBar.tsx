import { NavLink } from "react-router-dom";
import './css/NavigationBar.css'

const NavigationBar = () => {

    return (
        <nav className="nav">
            <p>BokTrading</p>
            <div className="links">
                <NavLink to="/article">Article</NavLink>
            </div>
        </nav>
    );
}
export default NavigationBar;
