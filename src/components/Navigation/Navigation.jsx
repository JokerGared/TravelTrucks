import s from "./Navigation.module.css";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/logo.svg" alt="Logo" />
      </Link>
    </nav>
  );
};

export default Navigation;
