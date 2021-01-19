import React from "react";

const Domain = ({ data }) => {
  const { company, domain, email, name, provider, renewal } = data;

  const editDomain = () => {};

  const deleteDomain = () => {};

  return (
    <li>
      <p>Company: {company}</p>
      <p>Domain: {domain}</p>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <p>Provider: {provider}</p>
      <p>Renewal: {JSON.stringify(renewal, null, 2)}</p>
      <button onClick={editDomain}>Edit</button>
      <button onClick={deleteDomain}>Delete</button>
    </li>
  );
};

export default Domain;
