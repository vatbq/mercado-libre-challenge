import { useNavigate } from "react-router-dom";

import Search from "components/Search";
import MLLogo from "assets/MLLogo.png";
import { Paths } from "constants/paths";

import classes from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(Paths.Home);
  };

  return (
    <div className={classes.root}>
      <img
        src={MLLogo}
        alt="Mercado Libre Logo"
        onClick={handleLogoClick}
        className={classes.logo}
      />
      <Search />
    </div>
  );
};

export default Header;
