import { Link } from "react-router-dom";
import type { ReactElement } from "react";

const Header = (): ReactElement => {
  return (
    <header>
      <Link to="/">Главная</Link>
      <Link to="/favorites">Избранное</Link>
    </header>
  );
};

export default Header;
