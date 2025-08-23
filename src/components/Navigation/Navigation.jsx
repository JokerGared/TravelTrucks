import clsx from "clsx";
import s from "./Navigation.module.css";

import { Link, NavLink } from "react-router-dom";

const handleActiveClass = ({ isActive }) => {
  return clsx(s.navLink, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/logo.svg" alt="Logo" className={s.logo} />
      </Link>
      <div className={s.linkContainer}>
        <NavLink to="/" className={handleActiveClass}>
          Home
        </NavLink>
        <NavLink to="/campers" className={handleActiveClass} end>
          Catalog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
