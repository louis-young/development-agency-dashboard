import React, { useContext, useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

import { ClientsContext } from "../../../context/ClientsContext";

import Breadcrumb from "../../Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const initialFields = {
  company: "",
  contact: "",
  phone: "",
  email: "",
};

const ClientActions = () => {
  const { id } = useParams();

  const history = useHistory();

  const editing = id;

  const [fields, setFields] = useState(initialFields);

  const { clients, editMutation, addMutation } = useContext(ClientsContext);

  const editableClient = clients?.find((client) => client.id === id);

  useEffect(() => {
    if (!editableClient) {
      return;
    }

    setFields(editableClient);
  }, [editableClient]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editing) {
      editMutation.mutate(fields);
    } else {
      addMutation.mutate(fields);
    }

    history.push(ROUTES.CLIENTS);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  if (editing && !editableClient) {
    return <p>No client found.</p>;
  }

  const action = editing ? "Edit" : "Add";

  return (
    <div>
      <Breadcrumbs>
        <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
        <Breadcrumb title="Clients" link={ROUTES.CLIENTS} />
        {id && <Breadcrumb title={editableClient.company} link={`${ROUTES.CLIENTS}/${id}`} />}
        <Breadcrumb title={action} active />
      </Breadcrumbs>

      <form onSubmit={handleSubmit}>
        <label>
          Company
          <input name="company" type="text" value={fields.company} onChange={handleInputChange} required />
        </label>

        <label>
          Contact
          <input name="contact" type="text" value={fields.contact} onChange={handleInputChange} required />
        </label>

        <label>
          Email
          <input name="email" type="email" value={fields.email} onChange={handleInputChange} required />
        </label>

        <label>
          Phone
          <input name="phone" type="tel" value={fields.phone} onChange={handleInputChange} required />
        </label>

        <button className="button" type="submit">
          {action} Client
        </button>
      </form>
    </div>
  );
};

export default ClientActions;
