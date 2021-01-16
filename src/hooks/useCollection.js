import { useState, useEffect } from "react";

import { fetchCollection } from "../api/api";

const useCollection = (name) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCollection = async () => {
      try {
        setLoading(true);

        const data = await fetchCollection(name);

        if (!data.docs.length) {
          throw new Error();
        }

        data.docs.forEach((item) => {
          setData((data) => [...data, item.data()]);
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getCollection();
  }, [name]);

  return { loading, error, data };
};

export default useCollection;
