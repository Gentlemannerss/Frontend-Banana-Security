import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const { isAuth, logout } = useContext(AuthContext); //Moet alles uit de context halen.
  console.log(isAuth);

  function handleLogout() {
      logout();
  }
  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      <div>
        {isAuth ? (
            <button type="button" onClick={handleLogout}>
              Log out
            </button>
        ) : (
            <>
              <Link to="/signIn">
                <button type="button">Log in</button>
              </Link>
              <Link to="/signUp">
                <button type="button">Register</button>
              </Link>
            </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;