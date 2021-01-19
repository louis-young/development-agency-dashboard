import React from "react";

const Document = ({ data, deleteMutation }) => {
  const { id, title, description, content } = data;

  return (
    <li>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Content: {content}</p>
      <button
        onClick={() => {
          deleteMutation.mutate(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Document;
