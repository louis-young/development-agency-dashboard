import React, { useEffect, useState, createContext } from "react";

import { auth, provider } from "../firebase/firebase";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [authenticating, setAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthenticating(false);

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

  return (
    <AuthenticationContext.Provider value={{ user, authenticating, signIn, signOut }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
