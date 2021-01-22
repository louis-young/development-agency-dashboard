import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { DomainsContext } from "../../context/DomainsContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import { searchArrayOfObjects } from "../../utilities/utilities";

import Domain from "../../components/domains/Domain/Domain";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Table from "../../components/Table/Table";
import Search from "../../components/Search/Search";

const title = "Tracker • Domains";

const headers = ["Domain", "Company", "Platform", "Renewal", "Actions"];

const Domains = () => {
  const [search, setSearch] = useState("");

  useTitle(title);

  const { loading, error, domains } = useContext(DomainsContext);

  const results = searchArrayOfObjects(domains, search);

  const items = results || domains;

  return (
    <article className="page">
      <div className="page__actions">
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
          <Breadcrumb title="Domains" active />
        </Breadcrumbs>

        <Link className="button button--add" to={`${ROUTES.DOMAINS}/add`}>
          Add Domain
        </Link>
      </div>

      <Search search={search} setSearch={setSearch} placeholder="Search domains..." />

      <Table loading={loading} error={error} headers={headers} items={items} item={Domain} />
    </article>
  );
};

export default Domains;
