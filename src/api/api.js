import { database } from "../firebase/firebase";

const fetchCollection = async (name) => {
  const collection = await database.collection(name).get();

  const data = collection.docs.map((document) => ({ id: document.id, ...document.data() }));

  return data;
};

export { fetchCollection };
