import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { DomainsContext } from "../../../context/DomainsContext";
import { ClientsContext } from "../../../context/ClientsContext";

import { ROUTES } from "../../../constants/constants";

const Domain = () => {
  const { id } = useParams();

  const { domains, deleteMutation } = useContext(DomainsContext);

  const { clients } = useContext(ClientsContext);

  if (!domains) {
    return <p>Loading domain...</p>;
  }

  const domain = domains.find((domain) => domain.id === id);

  if (!domain) {
    return <p>No domain found.</p>;
  }

  const { domain: url, company, platform, renewal } = domain;

  const deleteDomain = () => {
    deleteMutation.mutate(id);
  };

  const client = clients.find((client) => client.id === company); // TODO: Refactor.

  return (
    <section>
      <h1>Domain</h1>

      <h2>{url}</h2>

      <p>
        Company: <Link to={`${ROUTES.CLIENTS}/${client.id}`}>{client.company}</Link>
      </p>
      <p>Platform: {platform}</p>
      <p>Renewal: {renewal}</p>

      <Link to={`${ROUTES.DOMAINS}/${id}/edit`}>Edit</Link>
      <button onClick={deleteDomain}>Delete</button>
    </section>
  );
};

export default Domain;
