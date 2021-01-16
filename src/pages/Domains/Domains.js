import React from "react";

import useCollection from "../../hooks/useCollection";

import { COLLECTIONS } from "../../constants/constants";

const Domains = () => {
  const { loading, error, data: domains } = useCollection(COLLECTIONS.DOMAINS);

  return (
    <div>
      <h1>Domains</h1>
      {loading && <p>Loading domains...</p>}
      {error && <p>Error loading domains.</p>}
      <ul>
        {domains &&
          domains.map((domain) => (
            <li key={domain.domain}>
              <p>Company: {domain.company}</p>
              <p>Domain: {domain.domain}</p>
              <p>Email: {domain.email}</p>
              <p>Name: {domain.name}</p>
              <p>Provider: {domain.provider}</p>
              <p>Renewal: {JSON.stringify(domain.renewal, null, 2)}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Domains;
