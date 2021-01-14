import React, { useEffect, useState, createContext } from "react";

import { auth, provider } from "../firebase/firebase";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) return;

      setUser(user);
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider);
  };

  const signOut = () => {
    auth.signOut();

    setUser(null);
  };

  return <AuthenticationContext.Provider value={{ user, signIn, signOut }}>{children}</AuthenticationContext.Provider>;
};

export { AuthenticationContext, AuthenticationProvider };
