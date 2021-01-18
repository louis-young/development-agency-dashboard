import { useState, useEffect, useCallback } from "react";

import { fetchCollection } from "../api/api";

const useCollection = (name) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getCollection = useCallback(async () => {
    try {
      setLoading(true);

      const collection = await fetchCollection(name);

      if (!collection.docs.length) {
        throw new Error();
      }

      const data = collection.docs.map((document) => ({ id: document.id, ...document.data() }));

      setData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    getCollection();
  }, [name]);

  const refetch = () => {
    getCollection();
  };

  return { loading, error, data, refetch };
};

export default useCollection;
