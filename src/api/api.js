import { database } from "../firebase/firebase";

const fetchCollection = async (name) => {
  const collection = await database.collection(name).get();

  const data = collection.docs.map((document) => ({ id: document.id, ...document.data() }));

  return data;
};

const addDocument = async (collection, document) => {
  await database.collection(collection).add(document);
};

const editDocument = async (collection, document) => {
  await database.collection(collection).doc(document.id).update(document);
};

const deleteDocument = async (collection, id) => {
  await database.collection(collection).doc(id).delete();
};

export { fetchCollection, addDocument, deleteDocument, editDocument };
