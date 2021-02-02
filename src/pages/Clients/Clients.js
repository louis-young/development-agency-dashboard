import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { ClientsContext } from "../../context/ClientsContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import { searchArrayOfObjects } from "../../utilities/utilities";

import ClientRow from "../../components/Table/ClientRow/ClientRow";
import Search from "../../components/Search/Search";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Table from "../../components/Table/Table";

const title = "Tracker • Clients";

const headers = ["Company", "Contact", "Email", "Phone", "Actions"];

const Clients = () => {
  const [search, setSearch] = useState("");

  useTitle(title);

  const { loading, error, clients } = useContext(ClientsContext);

  const results = searchArrayOfObjects(clients, search);

  const items = results || clients;

  return (
    <article className="page">
      <div className="page__actions">
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
          <Breadcrumb title="Clients" active />
        </Breadcrumbs>

        <Link className="button button--add" to={`${ROUTES.CLIENTS}/add`}>
          Add Client
        </Link>
      </div>

      <Search search={search} setSearch={setSearch} placeholder="Search clients..." />

      <Table loading={loading} error={error} headers={headers} items={items} item={ClientRow} />
    </article>
  );
};

export default Clients;
