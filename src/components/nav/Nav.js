import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <menu>
      <nav>
        <Link to="/" className="link">
          <h2 className="logo">Logo</h2>
        </Link>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/product">Shop</Link>
          </li>
          <li>
            <Link to="/auth">Account</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </menu>
  );
};

export default Nav;
