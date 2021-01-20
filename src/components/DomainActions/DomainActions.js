import React, { useContext, useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

import { ROUTES } from "../../constants/constants";

import { DomainsContext } from "../../context/DomainsContext";

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

  const domainToEdit = domains?.find((domain) => domain.id === id); // Bad loading handle.

  useEffect(() => {
    if (!domainToEdit) {
      return;
    }

    setFields(domainToEdit);
  }, [domainToEdit]);

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

  return (
    <div>
      <h1>{editing ? "Edit" : "Add"} Domain</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Company
          <input name="company" type="text" value={fields.company} onChange={handleInputChange} />
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

        <button type="submit">{editing ? "Edit" : "Add"} Domain</button>
      </form>
    </div>
  );
};

export default DomainActions;
