import React, { useContext, useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

import { DocumentationContext } from "../../../context/DocumentationContext";

import Breadcrumb from "../../Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const initialFields = {
  title: "",
  description: "",
  content: "",
};

const DocumentActions = () => {
  const { id } = useParams();

  const history = useHistory();

  const editing = id;

  const [fields, setFields] = useState(initialFields);

  const { documentation, editMutation, addMutation } = useContext(DocumentationContext);

  const editableDocument = documentation?.find((document) => document.id === id);

  useEffect(() => {
    if (!editableDocument) {
      return;
    }

    setFields(editableDocument);
  }, [editableDocument]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editing) {
      editMutation.mutate(fields);
    } else {
      addMutation.mutate(fields);
    }

    history.push(ROUTES.DOCUMENTATION);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  if (editing && !editableDocument) {
    return <p>No document found.</p>;
  }

  const action = editing ? "Edit" : "Add";

  return (
    <div>
      <Breadcrumbs>
        <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
        <Breadcrumb title="Documentation" link={ROUTES.DOCUMENTATION} />
        {id && <Breadcrumb title={editableDocument.title} link={`${ROUTES.DOCUMENTATION}/${id}`} />}
        <Breadcrumb title={action} active />
      </Breadcrumbs>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" type="text" value={fields.title} onChange={handleInputChange} required />
        </label>

        <label>
          Description
          <input name="description" type="text" value={fields.description} onChange={handleInputChange} required />
        </label>

        <label>
          Content
          <textarea name="content" value={fields.content} onChange={handleInputChange} required />
        </label>

        <button className="button" type="submit">
          {action} Document
        </button>
      </form>
    </div>
  );
};

export default DocumentActions;
