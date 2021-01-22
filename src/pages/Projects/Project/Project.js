import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { ProjectsContext } from "../../../context/ProjectsContext";
import { DomainsContext } from "../../../context/DomainsContext";

import { ROUTES } from "../../../constants/constants";

import Domain from "../../../components/domains/Domain/Domain";
import Table from "../../../components/Table/Table";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Loading from "../../../components/Loading/Loading";

const headers = ["Domain", "Client", "Provider", "Renewal", "Actions"];

const Project = () => {
  const { id } = useParams();

  const { projects, deleteMutation } = useContext(ProjectsContext);

  const { domains } = useContext(DomainsContext);

  if (!projects) {
    return <Loading />;
  }

  const client = projects.find((client) => client.id === id);

  if (!client) {
    return <p>No client found.</p>;
  }

  const clientDomains = domains?.filter((domain) => domain.company === id);

  const { company, contact, email, phone } = client;

  const deleteProject = () => {
    if (clientDomains.length) {
      alert(`Please delete domains associated with ${company}.`);
      return;
    }

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
          <Breadcrumb title="Projects" link={ROUTES.CLIENTS} />
          <Breadcrumb title={company} active />
        </Breadcrumbs>
      </div>

      <p>Company: {company}</p>
      <p>Contact: {contact}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>

      <h3>Domains</h3>

      <Table items={clientDomains} headers={headers} item={Domain} />

      <Link className="button" to={`${ROUTES.CLIENTS}/${id}/edit`}>
        Edit
      </Link>
      <button className="button button--small button--delete" onClick={deleteProject}>
        Delete
      </button>
    </section>
  );
};

export default Project;
