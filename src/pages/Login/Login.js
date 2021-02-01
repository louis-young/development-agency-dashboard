import React, { useState, useContext } from "react";

import { AuthenticationContext } from "../../context/AuthenticationContext";

import useTitle from "../../hooks/useTitle";

import Logo from "../../components/Logo/Logo";

import "./Login.scss";
import Notification from "../../components/Notification/Notification";

const title = "Tracker • Login";

const initialUser = {
  email: "test@domain.tld",
  password: "69K+mEEN~ydy.`/J",
};

const Login = () => {
  const { signIn, authenticating, error } = useContext(AuthenticationContext);

  const [email, setEmail] = useState(initialUser.email);
  const [password, setPassword] = useState(initialUser.password);

  useTitle(title);

  const handleSubmit = (event) => {
    event.preventDefault();

    signIn(email, password);
  };

  return (
    <section className="login">
      <article className="container container--extra-small">
        <Logo dark />

        {error && <Notification message={error} />}

        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form__input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className="form__label">
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form__input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <button className="button form__submit" type="submit" disabled={authenticating}>
            Sign In
          </button>
        </form>
      </article>
    </section>
  );
};

export default Login;
