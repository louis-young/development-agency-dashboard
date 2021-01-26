import React from "react";

import logo from "../../assets/header/logo.png";

import "./Logo.scss";

const Logo = ({ dark }) => {
  const className = dark ? "logo logo--dark" : "logo";

  return <img className={className} src={logo} alt="Tracker" />;
};

export default Logo;
