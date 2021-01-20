import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { DocumentationContext } from "../../context/DocumentationContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import DocumentationList from "../../components/DocumentationList/DocumentationList";

const title = "Tracker • Documentation";

const Documentation = () => {
  useTitle(title);

  const { loading, error, documentation } = useContext(DocumentationContext);

  return (
    <>
      <h1>Documentation</h1>
      <Link to={`${ROUTES.DOCUMENTATION}/add`}>Add</Link>

      <DocumentationList loading={loading} error={error} documentation={documentation} />
    </>
  );
};

export default Documentation;
