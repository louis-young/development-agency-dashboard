import React, { createContext } from "react";

import { useHistory } from "react-router-dom";

import { useQuery, useQueryClient, useMutation } from "react-query";

import { fetchCollection } from "../api/api";
import { database } from "../firebase/firebase";

import { COLLECTIONS, ROUTES } from "../constants/constants";

const DocumentationContext = createContext();

/**
 * Refactor the add/delete, etc to take a collection and id/data param to make it DRY.
 * Check mutation names
 */

const DocumentationProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const history = useHistory();

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
    onError: () => {
      alert("Error adding document.");
    },
  });

  const deleteMutation = useMutation(deleteDocument, {
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
