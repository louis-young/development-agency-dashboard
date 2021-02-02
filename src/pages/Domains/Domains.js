import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { DomainsContext } from "../../context/DomainsContext";

import useTitle from "../../hooks/useTitle";

import { HEADERS, ROUTES } from "../../constants/constants";

import { searchArrayOfObjects } from "../../utilities/utilities";

import DomainRow from "../../components/Table/DomainRow/DomainRow";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Table from "../../components/Table/Table";
import Search from "../../components/Search/Search";

const title = "Tracker • Domains";

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

      <Table loading={loading} error={error} headers={HEADERS.DOMAINS} items={items} item={DomainRow} />
    </article>
  );
};

export default Domains;
