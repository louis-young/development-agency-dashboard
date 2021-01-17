import React from "react";

import useCollection from "../../hooks/useCollection";
import useTitle from "../../hooks/useTitle";

import { COLLECTIONS } from "../../constants/constants";

const title = "Tracker • Documentation";

const Documentation = () => {
  const { loading, error, data: documentation } = useCollection(COLLECTIONS.DOCUMENTATION);

  useTitle(title);

  return (
    <div>
      <h1>Documentation</h1>
      {loading && <p>Loading documentation...</p>}
      {error && <p>Error loading documentation.</p>}
      <ul>
        {documentation &&
          documentation.map((documentation) => (
            <li key={documentation.title}>
              <p>Title: {documentation.title}</p>
              <p>Description: {documentation.description}</p>
              <p>Content: {documentation.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Documentation;
