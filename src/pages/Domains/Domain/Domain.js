import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { DomainsContext } from "../../../context/DomainsContext";
import { ClientsContext } from "../../../context/ClientsContext";

import { ROUTES } from "../../../constants/constants";

import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Loading from "../../../components/Loading/Loading";

const Domain = () => {
  const { id } = useParams();

  const { domains, deleteMutation } = useContext(DomainsContext);

  const { clients } = useContext(ClientsContext);

  if (!domains) {
    return <Loading />;
  }

  const domain = domains.find((domain) => domain.id === id);

  if (!domain) {
    return <p>No domain found.</p>;
  }

  const { domain: url, company, platform, renewal } = domain;

  const deleteDomain = () => {
    if (!window.confirm(`Are you sure you want to delete ${url}?`)) {
      return;
    }

    deleteMutation.mutate(id);
  };

  const client = clients.find((client) => client.id === company);

  return (
    <section>
      <div className="page__actions">
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
          <Breadcrumb title="Domains" link={ROUTES.DOMAINS} />
          <Breadcrumb title={url} active />
        </Breadcrumbs>
      </div>

      <h3>{url}</h3>

      <p>
        Company: <Link to={`${ROUTES.CLIENTS}/${client.id}`}>{client.company}</Link>
      </p>
      <p>Platform: {platform}</p>
      <p>Renewal: {renewal}</p>

      <Link className="button" to={`${ROUTES.DOMAINS}/${id}/edit`}>
        Edit
      </Link>
      <button className="button button--danger" onClick={deleteDomain}>
        Delete
      </button>
    </section>
  );
};

export default Domain;
