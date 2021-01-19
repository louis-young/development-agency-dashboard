import { useState, useEffect } from "react";

import { fetchCollection } from "../api/api";

const useCollection = (name) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [invalidations, setInvalidations] = useState(0);

  useEffect(() => {
    const getCollection = async () => {
      try {
        setData([]);

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
    };

    getCollection();
  }, [name, invalidations]);

  const invalidate = () => {
    setInvalidations((invalidations) => invalidations + 1);
  };

  return { loading, error, data, invalidate };
};

export default useCollection;
