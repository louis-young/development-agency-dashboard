import React from "react";

import useCollection from "../../hooks/useCollection";
import useTitle from "../../hooks/useTitle";

import { COLLECTIONS } from "../../constants/constants";

import Domain from "../../components/Domain/Domain";

const title = "Tracker • Domains";

const Domains = () => {
  const { loading, error, data: domains } = useCollection(COLLECTIONS.DOMAINS);

  useTitle(title);

  return (
    <div>
      <h1>Domains</h1>
      {loading && <p>Loading domains...</p>}
      {error && <p>Error loading domains.</p>}
      <ul>{domains && domains.map((domain) => <Domain key={domain.id} data={domain} />)}</ul>
    </div>
  );
};

export default Domains;
