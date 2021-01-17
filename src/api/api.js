import { database } from "../firebase/firebase";

const fetchCollection = (name) => {
  const collection = database.collection(name);

  return collection.get();
};

export { fetchCollection };
