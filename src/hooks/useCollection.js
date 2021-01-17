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

        const collection = await fetchCollection(name);

        if (!collection.docs.length) {
          throw new Error();
        }

        const data = collection.docs.map((document) => document.data());

        setData(data);
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
