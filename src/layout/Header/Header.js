import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/constants";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import logo from "../../assets/header/logo.png";

import "./Header.scss";

const Header = () => {
  const { signOut } = useContext(AuthenticationContext);

  return (
    <header className="header">
      <Link to={ROUTES.DASHBOARD}>
        <img className="header__logo" src={logo} alt="Tracker" />
      </Link>
      <button className="header__button button button--light button--small" onClick={signOut}>
        Sign Out
      </button>
    </header>
  );
};

export default Header;
