import React, { createContext } from "react";

import { useHistory } from "react-router-dom";

import { useQuery, useQueryClient, useMutation } from "react-query";

import { addDocument, editDocument, deleteDocument, fetchCollection } from "../api/api";

import { COLLECTIONS, ROUTES } from "../constants/constants";

const DomainsContext = createContext();

const DomainsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const history = useHistory();

  const addMutation = useMutation((document) => addDocument(COLLECTIONS.DOMAINS, document), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.DOMAINS);
    },
    onError: () => {
      alert("Error adding domain.");
    },
  });

  const editMutation = useMutation((document) => editDocument(COLLECTIONS.DOMAINS, document), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.DOMAINS);
    },
    onError: () => {
      alert("Error editing domain.");
    },
  });

  const deleteMutation = useMutation((id) => deleteDocument(COLLECTIONS.DOMAINS, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.DOMAINS);

      history.push(ROUTES.DOMAINS);
    },
    onError: () => {
      alert("Error deleting domain.");
    },
  });

  const { isLoading: loading, error, data: domains } = useQuery(COLLECTIONS.DOMAINS, () =>
    fetchCollection(COLLECTIONS.DOMAINS)
  );

  return (
    <DomainsContext.Provider value={{ loading, error, domains, addMutation, editMutation, deleteMutation }}>
      {children}
    </DomainsContext.Provider>
  );
};

export { DomainsContext, DomainsProvider };
