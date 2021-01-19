import React from "react";

import { useQuery, useQueryClient, useMutation } from "react-query";

import { fetchCollection } from "../../api/api";
import { database } from "../../firebase/firebase";

import useTitle from "../../hooks/useTitle";

import { COLLECTIONS } from "../../constants/constants";

import Document from "../../components/Document/Document";

const title = "Tracker • Documentation";

const Documentation = () => {
  useTitle(title);

  const queryClient = useQueryClient();

  const addDocument = async (document) => {
    await database.collection(COLLECTIONS.DOCUMENTATION).add(document);
  };

  const deleteDocument = async (id) => {
    await database.collection(COLLECTIONS.DOCUMENTATION).doc(id).delete();
  };

  const addMutation = useMutation(addDocument, {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.DOCUMENTATION);
    },
  });

  const deleteMutation = useMutation(deleteDocument, {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.DOCUMENTATION);
    },
  });

  const { isLoading, error, data: documentation } = useQuery(COLLECTIONS.DOCUMENTATION, () =>
    fetchCollection(COLLECTIONS.DOCUMENTATION)
  );

  return (
    <>
      <h1>Documentation</h1>
      <button
        onClick={() => {
          addMutation.mutate({
            title: "Lorem",
            description: "Ipsum",
            content: "Dolor",
          });
        }}
      >
        Add
      </button>
      {isLoading && <p>Loading documentation...</p>}
      {error && <p>Error loading documentation.</p>}
      <ul>
        {documentation &&
          documentation.map((document) => (
            <Document key={document.id} data={document} deleteMutation={deleteMutation} />
          ))}
      </ul>
    </>
  );
};

export default Documentation;
