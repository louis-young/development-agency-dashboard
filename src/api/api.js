import { database } from "../firebase/firebase";

const getCollection = async (name) => {
  const FIELD = "created";

  const SORT = "desc";

  const collection = await database.collection(name).orderBy(FIELD, SORT).get();

  const data = collection.docs.map((document) => ({ id: document.id, ...document.data() }));

  return data;
};

const addDocument = async (collection, document) => {
  const created = Date.now();

  await database.collection(collection).add({ ...document, created, modified: created });
};

const editDocument = async (collection, document) => {
  const modified = Date.now();

  await database
    .collection(collection)
    .doc(document.id)
    .update({ ...document, modified });
};

const deleteDocument = async (collection, id) => {
  await database.collection(collection).doc(id).delete();
};

export { getCollection, addDocument, deleteDocument, editDocument };
