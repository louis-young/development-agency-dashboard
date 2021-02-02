import React, { useEffect, useState, createContext } from "react";

import { auth } from "../firebase/firebase";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [authenticating, setAuthenticating] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    setAuthenticating(true);

    auth.onAuthStateChanged((user) => {
      setAuthenticating(false);

      if (!user) return;

      setUser(user);
    });
  }, []);

  const createUser = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      setError(error.message);
    });
  };

  const signIn = (email, password) => {
    setError(null);

    setAuthenticating(true);

    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError(error.message);

      setAuthenticating(false);
    });
  };

  const signOut = () => {
    auth.signOut();

    setUser(null);
  };

  return (
    <AuthenticationContext.Provider value={{ user, authenticating, error, signIn, signOut, createUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
