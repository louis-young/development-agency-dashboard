import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ClientsContext } from "../../context/ClientsContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import Client from "../../components/Client/Client";

const title = "Tracker • Clients";

const Clients = () => {
  useTitle(title);

  const { loading, error, clients } = useContext(ClientsContext);

  return (
    <div>
      <h1>Clients</h1>
      <Link to={`${ROUTES.CLIENTS}/add`}>Add</Link>
      {loading && <p>Loading clients...</p>}
      {error && <p>Error loading clients.</p>}
      <ul>{clients && clients.map((client) => <Client key={client.id} id={client.id} client={client.company} />)}</ul>
    </div>
  );
};

export default Clients;
