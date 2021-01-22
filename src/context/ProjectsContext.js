import React, { createContext } from "react";

import { useHistory } from "react-router-dom";

import { useQuery, useQueryClient, useMutation } from "react-query";

import { addDocument, editDocument, deleteDocument, getCollection } from "../api/api";

import { COLLECTIONS, ROUTES } from "../constants/constants";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const history = useHistory();

  const addMutation = useMutation((document) => addDocument(COLLECTIONS.PROJECTS, document), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.PROJECTS);
    },
    onError: () => {
      alert("Error adding project.");
    },
  });

  const editMutation = useMutation((document) => editDocument(COLLECTIONS.PROJECTS, document), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.PROJECTS);
    },
    onError: () => {
      alert("Error editing project.");
    },
  });

  const deleteMutation = useMutation((id) => deleteDocument(COLLECTIONS.PROJECTS, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(COLLECTIONS.PROJECTS);

      history.push(ROUTES.PROJECTS);
    },
    onError: () => {
      alert("Error deleting project.");
    },
  });

  const { isLoading: loading, error, data: projects } = useQuery(COLLECTIONS.PROJECTS, () =>
    getCollection(COLLECTIONS.PROJECTS)
  );

  return (
    <ProjectsContext.Provider value={{ loading, error, projects, addMutation, editMutation, deleteMutation }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };
