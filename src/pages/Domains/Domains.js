import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { DomainsContext } from "../../context/DomainsContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import Domain from "../../components/Domain/Domain";

const title = "Tracker • Domains";

const Domains = () => {
  useTitle(title);

  const { loading, error, domains } = useContext(DomainsContext);

  return (
    <div>
      <h1>Domains</h1>
      <Link to={`${ROUTES.DOMAINS}/add`}>Add</Link>
      {loading && <p>Loading domains...</p>}
      {error && <p>Error loading domains.</p>}
      <ul>{domains && domains.map((domain) => <Domain key={domain.id} id={domain.id} domain={domain.domain} />)}</ul>
    </div>
  );
};

export default Domains;
