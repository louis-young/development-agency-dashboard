import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ClientsContext } from "../../context/ClientsContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import ClientsList from "../../components/ClientsList/ClientsList";

const title = "Tracker • Clients";

const Clients = () => {
  useTitle(title);

  const { loading, error, clients } = useContext(ClientsContext);

  return (
    <div>
      <h1>Clients</h1>
      <Link to={`${ROUTES.CLIENTS}/add`}>Add</Link>

      <ClientsList loading={loading} error={error} clients={clients} />
    </div>
  );
};

export default Clients;
