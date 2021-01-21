import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { DomainsContext } from "../../context/DomainsContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import Domain from "../../components/domains/Domain/Domain";

import List from "../../components/List/List";

const title = "Tracker • Domains";

const Domains = () => {
  useTitle(title);

  const { loading, error, domains } = useContext(DomainsContext);

  return (
    <div>
      <h2>Domains</h2>
      <Link className="button" to={`${ROUTES.DOMAINS}/add`}>
        Add
      </Link>

      <List loading={loading} error={error} items={domains} item={Domain} />
    </div>
  );
};

export default Domains;
