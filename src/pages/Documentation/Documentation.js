import React from "react";

import useCollection from "../../hooks/useCollection";
import useTitle from "../../hooks/useTitle";

import { database } from "../../firebase/firebase";

import { COLLECTIONS } from "../../constants/constants";

import Document from "../../components/Document/Document";

const title = "Tracker • Documentation";

const Documentation = () => {
  const { loading, error, data: documentation, invalidate } = useCollection(COLLECTIONS.DOCUMENTATION);

  useTitle(title);

  const addDocument = async () => {
    await database.collection(COLLECTIONS.DOCUMENTATION).add({
      title: "Lorem",
      description: "Ipsum",
      content: "Dolor",
    });

    invalidate();
  };

  const deleteDocument = async (id) => {
    await database.collection(COLLECTIONS.DOCUMENTATION).doc(id).delete();

    invalidate();
  };

  return (
    <div>
      <h1>Documentation</h1>
      <button onClick={addDocument}>Add</button>
      {loading && <p>Loading documentation...</p>}
      {error && <p>Error loading documentation.</p>}
      <ul>
        {documentation &&
          documentation.map((document) => (
            <Document key={document.id} data={document} deleteDocument={deleteDocument} />
          ))}
      </ul>
    </div>
  );
};

export default Documentation;
