import React, { useContext } from "react";

import { AuthenticationContext } from "../../context/AuthenticationContext";

const Login = () => {
  const { signIn } = useContext(AuthenticationContext);

  return (
    <div>
      <h1>Login</h1>

      <button onClick={signIn}>Sign In with Google</button>
    </div>
  );
};

export default Login;
