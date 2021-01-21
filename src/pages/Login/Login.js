import React, { useContext } from "react";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import useTitle from "../../hooks/useTitle";

const title = "Tracker • Login";

const Login = () => {
  const { signIn } = useContext(AuthenticationContext);

  useTitle(title);

  return (
    <div>
      <h2>Login</h2>

      <button onClick={signIn}>Sign In with Google</button>
    </div>
  );
};

export default Login;
