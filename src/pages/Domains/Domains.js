import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { DomainsContext } from "../../context/DomainsContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import Domain from "../../components/domains/Domain/Domain";

import List from "../../components/List/List";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb/Breadcrumb";

const title = "Tracker • Domains";

const Domains = () => {
  useTitle(title);

  const { loading, error, domains } = useContext(DomainsContext);

  return (
    <div>
      <Breadcrumbs>
        <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
        <Breadcrumb title="Domains" active />
      </Breadcrumbs>

      <Link className="button" to={`${ROUTES.DOMAINS}/add`}>
        Add
      </Link>

      <List loading={loading} error={error} items={domains} item={Domain} />
    </div>
  );
};

export default Domains;
