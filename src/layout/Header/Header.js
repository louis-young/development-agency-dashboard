import React, { useContext } from "react";

import { AuthenticationContext } from "../../context/AuthenticationContext";

const Header = () => {
  const { signOut } = useContext(AuthenticationContext);

  return (
    <header>
      <h2>Header</h2>
      <button onClick={signOut}>Sign Out</button>
    </header>
  );
};

export default Header;
