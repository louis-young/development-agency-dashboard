import React from "react";

const Document = ({ data, deleteDocument }) => {
  const { id, title, description, content } = data;

  return (
    <li>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Content: {content}</p>
      <button
        onClick={() => {
          deleteDocument(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Document;
