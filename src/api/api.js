import { database } from "../firebase/firebase";

const fetchDomains = () => {
  const collection = database.collection("domains");

  const domains = collection.get();

  return domains;
};

export { fetchDomains };
