import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { ClientsContext } from "../../context/ClientsContext";

import { ROUTES } from "../../constants/constants";

const Client = () => {
  const { id } = useParams();

  const { clients, deleteMutation } = useContext(ClientsContext);

  if (!clients) {
    return <p>Loading client...</p>;
  }

  const client = clients.find((client) => client.id === id);

  if (!client) {
    return <p>No client found.</p>;
  }

  const { company, contact } = client;

  const deleteClient = () => {
    deleteMutation.mutate(id);
  };

  return (
    <section>
      <h1>Client</h1>

      <p>Company: {company}</p>
      <p>Contact: {contact}</p>

      <Link to={`${ROUTES.CLIENTS}/${id}/edit`}>Edit</Link>
      <button onClick={deleteClient}>Delete</button>
    </section>
  );
};

export default Client;
