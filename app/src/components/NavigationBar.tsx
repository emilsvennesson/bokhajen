import { NavLink } from 'react-router-dom';
import './css/NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="nav">
      <p className="title">BokTrading</p>
      <div className="links">
        <NavLink className="link" to="/">
          home
        </NavLink>
        <NavLink className="link" to="/article">
          Article
        </NavLink>
        <NavLink className="link" to="/article">
          Article
        </NavLink>
        <NavLink className="link" to="/authtest">
          auth
        </NavLink>
      </div>
    </nav>
  );
}
export default NavigationBar;
