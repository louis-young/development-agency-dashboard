import React, { useContext } from "react";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import "./Header.scss";

const Header = () => {
  const { signOut } = useContext(AuthenticationContext);

  return (
    <header className="header">
      <h3 className="header__logo">Tracker</h3>
      <button className="header__button button button--light button--small" onClick={signOut}>
        Sign Out
      </button>
    </header>
  );
};

export default Header;
