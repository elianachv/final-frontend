import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../Context/global.context";
import logo from "../../Assets/images/DH.png";
import "./Navbar.css";

const Navbar = () => {
  const { theme, setLightTheme, setDarkTheme } = useContext(GlobalContext);

  const handleChangeTheme = () => {
    if (theme.id === "light") setDarkTheme();
    if (theme.id === "dark") setLightTheme();
  };

  return (
    <nav className={`nav-${theme.id}`}>
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav__menu">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "nav__menu-active" : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "nav__menu-active" : null)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/favs"
          className={({ isActive }) => (isActive ? "nav__menu-active" : null)}
        >
          Favs
        </NavLink>
        <button onClick={handleChangeTheme}>
          {theme.id === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
