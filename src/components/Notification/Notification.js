import React from "react";

import "./Notification.scss";

const Notification = ({ message }) => {
  return (
    <article className="notification">
      <p className="notification__message">{message}</p>
    </article>
  );
};

export default Notification;
