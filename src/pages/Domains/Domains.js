import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { DomainsContext } from "../../context/DomainsContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import DomainsList from "../../components/domains/DomainsList/DomainsList";

const title = "Tracker • Domains";

const Domains = () => {
  useTitle(title);

  const { loading, error, domains } = useContext(DomainsContext);

  return (
    <div>
      <h1>Domains</h1>
      <Link to={`${ROUTES.DOMAINS}/add`}>Add</Link>

      <DomainsList loading={loading} error={error} domains={domains} />
    </div>
  );
};

export default Domains;
