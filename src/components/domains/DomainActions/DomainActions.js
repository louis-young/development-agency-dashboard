import React, { useContext, useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

import { DomainsContext } from "../../../context/DomainsContext";
import { ClientsContext } from "../../../context/ClientsContext";

const initialFields = {
  company: "",
  domain: "",
  email: "",
  name: "",
  platform: "",
  renewal: "",
};

const DomainActions = () => {
  const { id } = useParams();

  const history = useHistory();

  const editing = id;

  const [fields, setFields] = useState(initialFields);

  const { domains, editMutation, addMutation } = useContext(DomainsContext);

  const { clients } = useContext(ClientsContext);

  const editableDomain = domains?.find((domain) => domain.id === id);

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
          <select name="company" defaultValue={defaultValue} onChange={handleInputChange} required>
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
          <input name="domain" type="text" value={fields.domain} onChange={handleInputChange} required />
        </label>

        <label>
          Platform
          <input name="platform" type="text" value={fields.platform} onChange={handleInputChange} required />
        </label>

        <label>
          Renewal
          <input name="renewal" type="date" value={fields.renewal} onChange={handleInputChange} required />
        </label>

        <button type="submit">{action} Domain</button>
      </form>
    </div>
  );
};

export default DomainActions;
