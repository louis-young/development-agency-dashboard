import React from "react";

import useCollection from "../../hooks/useCollection";
import useTitle from "../../hooks/useTitle";

import { COLLECTIONS } from "../../constants/constants";

import Document from "../../components/Document/Document";

const title = "Tracker • Documentation";

const Documentation = () => {
  const { loading, error, data: documentation } = useCollection(COLLECTIONS.DOCUMENTATION);

  useTitle(title);

  return (
    <div>
      <h1>Documentation</h1>
      {loading && <p>Loading documentation...</p>}
      {error && <p>Error loading documentation.</p>}
      <ul>{documentation && documentation.map((document) => <Document key={document.id} data={document} />)}</ul>
    </div>
  );
};

export default Documentation;
