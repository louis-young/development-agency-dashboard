import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { ProjectsContext } from "../../../context/ProjectsContext";
import { DomainsContext } from "../../../context/DomainsContext";
import { ClientsContext } from "../../../context/ClientsContext";

import { ROUTES } from "../../../constants/constants";

import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Loading from "../../../components/Loading/Loading";

const Project = () => {
  const { id } = useParams();

  const { projects, deleteMutation } = useContext(ProjectsContext);

  const { domains } = useContext(DomainsContext);

  const { clients } = useContext(ClientsContext);

  if (!projects || !clients || !domains) {
    return <Loading />;
  }

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>No project found.</p>;
  }

  const { stage, status, type, notes, action } = project;

  const client = clients.find((client) => client.id === project.client);

  const { company } = client;

  const deleteProject = () => {
    if (!window.confirm(`Are you sure you want to delete ${company}?`)) {
      return;
    }

    deleteMutation.mutate(id);
  };

  return (
    <section>
      <div className="page__actions">
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
          <Breadcrumb title="Projects" link={ROUTES.PROJECTS} />
          <Breadcrumb title={company} active />
        </Breadcrumbs>
      </div>

      <p>Company: {company}</p>
      <p>Stage: {stage}</p>
      <p>Status: {status}</p>
      <p>Type: {type}</p>
      <p>Notes: {notes}</p>
      <p>Action: {action}</p>

      <div className="page__buttons">
        <Link className="button" to={`${ROUTES.PROJECTS}/${id}/edit`}>
          Edit
        </Link>
        <button className="button button--small button--delete" onClick={deleteProject}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default Project;
