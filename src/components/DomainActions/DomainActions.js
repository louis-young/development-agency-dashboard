import React, { useContext, useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

import { ROUTES } from "../../constants/constants";

import { DomainsContext } from "../../context/DomainsContext";
import { ClientsContext } from "../../context/ClientsContext";

const initialFields = {
  company: "",
  domain: "",
  email: "",
  name: "",
  provider: "",
  renewal: "",
};

const DomainActions = () => {
  const { id } = useParams();

  const history = useHistory();

  const editing = id;

  const [fields, setFields] = useState(initialFields);

  const { domains, editMutation, addMutation } = useContext(DomainsContext);

  const { clients } = useContext(ClientsContext);

  const editableDomain = domains?.find((domain) => domain.id === id); // TODO: Revisit the optional chaining operator - poor way to handle loading.

  useEffect(() => {
    if (!editableDomain) {
      return;
    }

    setFields(editableDomain);
  }, [editableDomain]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editing) {
      editMutation.mutate(fields);
    } else {
      addMutation.mutate(fields);
    }

    history.push(ROUTES.DOMAINS);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  if (editing && !editableDomain) {
    return <p>No domain found.</p>;
  }

  const action = editing ? "Edit" : "Add";

  const defaultValue = editableDomain?.company || "";

  return (
    <div>
      <h1>{action} Domain</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Company
          <select name="company" defaultValue={defaultValue} onChange={handleInputChange}>
            {!editableDomain && <option value="">Select a company...</option>}
            {clients?.map((client) => (
              <option key={client.id} value={client.id}>
                {client.company}
              </option>
            ))}
          </select>
        </label>

        <label>
          Domain
          <input name="domain" type="text" value={fields.domain} onChange={handleInputChange} />
        </label>

        <label>
          Email
          <input name="email" type="email" value={fields.email} onChange={handleInputChange} />
        </label>

        <label>
          Name
          <input name="name" type="text" value={fields.name} onChange={handleInputChange} />
        </label>

        <label>
          Provider
          <input name="provider" type="text" value={fields.provider} onChange={handleInputChange} />
        </label>

        <label>
          Renewal
          <input name="renewal" type="date" value={fields.renewal} onChange={handleInputChange} />
        </label>

        <button type="submit">{action} Domain</button>
      </form>
    </div>
  );
};

export default DomainActions;
