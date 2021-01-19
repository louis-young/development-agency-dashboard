import React, { useContext } from "react";

import { DomainsContext } from "../../context/DomainsContext";

import useTitle from "../../hooks/useTitle";

import Domain from "../../components/Domain/Domain";

const title = "Tracker • Domains";

const Domains = () => {
  useTitle(title);

  const { loading, error, domains, addMutation } = useContext(DomainsContext);

  const addDomain = () => {
    const domain = {
      company: "Google",
      domain: "google.com",
      email: "info@google.com",
      name: "Larry Page",
      provider: "20i",
      renewal: { seconds: 1610582400, nanoseconds: 0 },
    };

    addMutation.mutate(domain);
  };

  return (
    <div>
      <h1>Domains</h1>
      <button onClick={addDomain}>Add</button>
      {loading && <p>Loading domains...</p>}
      {error && <p>Error loading domains.</p>}
      <ul>{domains && domains.map((domain) => <Domain key={domain.id} id={domain.id} domain={domain.domain} />)}</ul>
    </div>
  );
};

export default Domains;
