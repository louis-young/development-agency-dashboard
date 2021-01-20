import React from "react";

import DocumentItem from "./DocumentItem/DocumentItem";

const DocumentationList = ({ loading, error, documentation }) => {
  if (loading) {
    return <p>Loading documentation...</p>;
  }

  if (error) {
    return <p>Error loading documentation.</p>;
  }

  if (!documentation) {
    return <p>No documentation.</p>;
  }

  return (
    <ul>
      {documentation.map((document) => (
        <DocumentItem key={document.id} id={document.id} title={document.title} />
      ))}
    </ul>
  );
};

export default DocumentationList;
