import React from "react";

import Client from "../Client/Client";

const ClientsList = ({ loading, error, clients }) => {
  if (loading) {
    return <p>Loading clients...</p>;
  }

  if (error) {
    return <p>Error loading clients.</p>;
  }

  if (!clients) {
    return <p>No clients.</p>;
  }

  return (
    <ul>
      {clients.map((client) => (
        <Client key={client.id} id={client.id} client={client.company} />
      ))}
    </ul>
  );
};

export default ClientsList;
