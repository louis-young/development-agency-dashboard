import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { ClientsContext } from "../../context/ClientsContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import { searchArrayOfObjects } from "../../utilities/utilities";

import List from "../../components/List/List";

import Client from "../../components/clients/Client/Client";
import Search from "../../components/Search/Search";

const title = "Tracker • Clients";

const Clients = () => {
  const [search, setSearch] = useState("");

  useTitle(title);

  const { loading, error, clients } = useContext(ClientsContext);

  const results = searchArrayOfObjects(clients, search);

  const items = results || clients;

  return (
    <div>
      <h2>Clients</h2>

      <Link className="button" to={`${ROUTES.CLIENTS}/add`}>
        Add
      </Link>

      <Search search={search} setSearch={setSearch} placeholder="Search clients..." />

      <List loading={loading} error={error} items={items} item={Client} />
    </div>
  );
};

export default Clients;
