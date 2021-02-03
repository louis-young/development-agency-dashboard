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
    return <Loading inline />;
  }

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>No project found.</p>;
  }

  const { stage, status, type, designer, developer, notes, action } = project;

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

      <form className="form">
        <label className="form__label">
          Client
          <input className="form__input" name="client" type="text" value={company} readOnly />
        </label>

        <label className="form__label">
          Stage
          <input className="form__input" name="stage" type="text" value={stage} readOnly />
        </label>

        <label className="form__label">
          Status
          <input className="form__input" name="status" type="text" value={status} readOnly />
        </label>

        <label className="form__label">
          Type
          <input className="form__input" name="type" type="text" value={type} readOnly />
        </label>

        <label className="form__label">
          Designer
          <input className="form__input" name="designer" type="text" value={designer} readOnly />
        </label>

        <label className="form__label">
          Developer
          <input className="form__input" name="developer" type="text" value={developer} readOnly />
        </label>

        <label className="form__label">
          Notes
          <input className="form__input" name="notes" type="text" value={notes} readOnly />
        </label>

        <label className="form__label">
          Next Action
          <input className="form__input" name="action" type="date" value={action} readOnly />
        </label>
      </form>

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
