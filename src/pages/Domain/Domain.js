import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { DomainsContext } from "../../context/DomainsContext";

const Domain = () => {
  const { id } = useParams();

  const { domains, deleteMutation } = useContext(DomainsContext);

  if (!domains) {
    return <p>Loading domain...</p>;
  }

  const domain = domains.find((domain) => domain.id === id);

  if (!domain) {
    return <p>No domain found.</p>;
  }

  const { domain: url, company, email, name, provider, renewal } = domain;

  const deleteDomain = () => {
    deleteMutation.mutate(id);
  };

  return (
    <section>
      <h1>Domain</h1>

      <h2>{url}</h2>

      <p>Company: {company}</p>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <p>Provider: {provider}</p>
      <p>Renewal: {renewal}</p>

      <Link to={`/domains/edit/${id}`}>Edit</Link>
      <button onClick={deleteDomain}>Delete</button>
    </section>
  );
};

export default Domain;
