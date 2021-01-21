import React from "react";

import DomainItem from "./DomainItem/DomainItem";

const DomainsList = ({ loading, error, domains }) => {
  if (loading) {
    return <p>Loading domains...</p>;
  }

  if (error) {
    return <p>Error loading domains.</p>;
  }

  if (!domains || !domains.length) {
    return <p>No domains.</p>;
  }

  return (
    <ul>
      {domains.map((domain) => (
        <DomainItem key={domain.id} id={domain.id} domain={domain.domain} />
      ))}
    </ul>
  );
};

export default DomainsList;
