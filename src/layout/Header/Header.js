import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/constants";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import Logo from "../../components/Logo/Logo";

import "./Header.scss";

const Header = () => {
  const { signOut } = useContext(AuthenticationContext);

  return (
    <header className="header">
      <Link to={ROUTES.DASHBOARD}>
        <Logo />
      </Link>
      <button className="header__button button button--light button--small" onClick={signOut}>
        Sign Out
      </button>
    </header>
  );
};

export default Header;
