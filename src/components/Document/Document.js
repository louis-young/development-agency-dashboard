import React from "react";

const Document = ({ data }) => {
  const { id, title, description, content } = data;

  const editDocument = () => {};

  const deleteDocument = () => {};

  return (
    <li>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Content: {content}</p>
    </li>
  );
};

export default Document;
