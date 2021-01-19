import React, { createContext } from "react";

import { useHistory } from "react-router-dom";

import { useQuery, useQueryClient, useMutation } from "react-query";

import { addDocument, deleteDocument, fetchCollection } from "../api/api";

import { COLLECTIONS, ROUTES } from "../constants/constants";

const DocumentationContext = createContext();

const DocumentationProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const history = useHistory();

  const addMutation = useMutation((document) => addDocument(COLLECTIONS.DOCUMENTATION, document), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.DOCUMENTATION);
    },
    onError: () => {
      alert("Error adding document.");
    },
  });

  const deleteMutation = useMutation((id) => deleteDocument(COLLECTIONS.DOCUMENTATION, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.DOCUMENTATION);

      history.push(ROUTES.DOCUMENTATION);
    },
    onError: () => {
      alert("Error deleting document.");
    },
  });

  const { isLoading: loading, error, data: documentation } = useQuery(COLLECTIONS.DOCUMENTATION, () =>
    fetchCollection(COLLECTIONS.DOCUMENTATION)
  );

  return (
    <DocumentationContext.Provider value={{ loading, error, documentation, addMutation, deleteMutation }}>
      {children}
    </DocumentationContext.Provider>
  );
};

export { DocumentationContext, DocumentationProvider };
