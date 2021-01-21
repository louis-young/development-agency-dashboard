import React, { useContext } from "react";

import { ClientsContext } from "../../../context/ClientsContext";

import { ROUTES } from "../../../constants/constants";

import Form from "../../../components/Form/Form";

const fields = [
  {
    label: "Company",
    name: "company",
    type: "text",
  },
  {
    label: "Contact",
    name: "contact",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
  },
];

const ClientForm = () => {
  const { clients, editMutation, addMutation } = useContext(ClientsContext);

  return (
    <Form
      name="client"
      items={clients}
      fields={fields}
      editMutation={editMutation}
      addMutation={addMutation}
      success={ROUTES.CLIENTS}
    />
  );
};

export default ClientForm;
