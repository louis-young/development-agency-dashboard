import React, { useState, useContext } from "react";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import useTitle from "../../hooks/useTitle";

const title = "Tracker • Login";

const Login = () => {
  const { signIn, authenticating, error, sendPasswordResetEmail } = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useTitle(title);

  const handleSubmit = (event) => {
    event.preventDefault();

    signIn(email, password);
  };

  return (
    <div>
      <h2>Login</h2>

      {error && <p>{error}</p>}

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form__input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form__input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button className="button form__submit" type="submit" disabled={authenticating}>
          Sign In
        </button>
      </form>

      <button onClick={sendPasswordResetEmail}>Reset Password</button>
    </div>
  );
};

export default Login;
