import React from "react";

import loading from "../../assets/loading/loading.svg";

import "./Loading.scss";

const Loading = () => {
  return <img className="loading" src={loading} alt="Loading..." />;
};

export default Loading;
