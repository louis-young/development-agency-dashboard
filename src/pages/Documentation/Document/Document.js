import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { DocumentationContext } from "../../../context/DocumentationContext";

import { ROUTES } from "../../../constants/constants";

import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Loading from "../../../components/Loading/Loading";

const Document = () => {
  const { id } = useParams();

  const { documentation, deleteMutation } = useContext(DocumentationContext);

  if (!documentation) {
    return <Loading />;
  }

  const document = documentation.find((document) => document.id === id);

  const { title, description, content } = document;

  const deleteDocument = () => {
    if (!window.confirm(`Are you sure you want to delete ${title}?`)) {
      return;
    }

    deleteMutation.mutate(id);
  };

  return (
    <section>
      <div className="page__actions">
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
          <Breadcrumb title="Documentation" link={ROUTES.DOCUMENTATION} />
          <Breadcrumb title={title} active />
        </Breadcrumbs>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
      <p>{content}</p>

      <Link className="button" to={`${ROUTES.DOCUMENTATION}/${id}/edit`}>
        Edit
      </Link>
      <button className="button button--small button--delete" onClick={deleteDocument}>
        Delete
      </button>
    </section>
  );
};

export default Document;
