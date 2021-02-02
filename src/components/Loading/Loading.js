import React from "react";

import loading from "../../assets/loading/loading.svg";

import "./Loading.scss";

const Loading = ({ inline }) => {
  const className = inline ? "loading loading--inline" : "loading";

  return <img className={className} src={loading} alt="Loading..." />;
};

export default Loading;
