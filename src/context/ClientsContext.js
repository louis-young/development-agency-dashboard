import React, { createContext } from "react";

import { useHistory } from "react-router-dom";

import { useQuery, useQueryClient, useMutation } from "react-query";

import { addDocument, editDocument, deleteDocument, getCollection } from "../api/api";

import { COLLECTIONS, ROUTES } from "../constants/constants";

const ClientsContext = createContext();

const ClientsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const history = useHistory();

  const addMutation = useMutation((document) => addDocument(COLLECTIONS.CLIENTS, document), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.CLIENTS);
    },
    onError: () => {
      alert("Error adding client.");
    },
  });

  const editMutation = useMutation((document) => editDocument(COLLECTIONS.CLIENTS, document), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.CLIENTS);
    },
    onError: () => {
      alert("Error editing client.");
    },
  });

  const deleteMutation = useMutation((id) => deleteDocument(COLLECTIONS.CLIENTS, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.CLIENTS);

      history.push(ROUTES.CLIENTS);
    },
    onError: () => {
      alert("Error deleting client.");
    },
  });

  const { isLoading: loading, error, data: clients } = useQuery(COLLECTIONS.CLIENTS, () =>
    getCollection(COLLECTIONS.CLIENTS)
  );

  return (
    <ClientsContext.Provider value={{ loading, error, clients, addMutation, editMutation, deleteMutation }}>
      {children}
    </ClientsContext.Provider>
  );
};

export { ClientsContext, ClientsProvider };
