import { database } from "../firebase/firebase";

const fetchCollection = (name) => {
  const collection = database.collection(name);

  const data = collection.get();

  return data;
};

export { fetchCollection };
