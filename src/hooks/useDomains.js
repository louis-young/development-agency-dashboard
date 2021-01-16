import { useState, useEffect } from "react";

import { fetchDomains } from "../api/api";

const useDomains = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    const getDomains = async () => {
      try {
        setLoading(true);

        const domains = await fetchDomains();

        if (!domains.docs.length) {
          throw new Error();
        }

        domains.docs.forEach((domain) => {
          setDomains((domains) => [...domains, domain.data()]);
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getDomains();
  }, []);

  return { loading, error, domains };
};

export default useDomains;
