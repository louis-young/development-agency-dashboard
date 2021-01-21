import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { ClientsContext } from "../../context/ClientsContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import ClientsList from "../../components/ClientsList/ClientsList";
import { searchArrayOfObjects } from "../../utilities/utilities";

const title = "Tracker • Clients";

const Clients = () => {
  const [search, setSearch] = useState("");

  useTitle(title);

  const { loading, error, clients } = useContext(ClientsContext);

  const results = searchArrayOfObjects(clients, search);

  return (
    <div>
      <h1>Clients</h1>
      <Link to={`${ROUTES.CLIENTS}/add`}>Add</Link>

      <input name="search" type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
      <ClientsList loading={loading} error={error} clients={results || clients} />
    </div>
  );
};

export default Clients;
