import { database } from "../firebase/firebase";

const getCollection = async (name) => {
  const FIELD = "created";

  const SORT = "desc";

  const collection = await database.collection(name).orderBy(FIELD, SORT).get();

  const data = collection.docs.map((document) => ({ id: document.id, ...document.data() }));

  return data;
};

const addDocument = async (collection, document) => {
  const timestamp = Date.now();

  await database.collection(collection).add({ ...document, created: timestamp, modified: timestamp });
};

const editDocument = async (collection, document) => {
  const timestamp = Date.now();

  await database
    .collection(collection)
    .doc(document.id)
    .update({ ...document, modified: timestamp });
};

const deleteDocument = async (collection, id) => {
  await database.collection(collection).doc(id).delete();
};

export { getCollection, addDocument, deleteDocument, editDocument };
