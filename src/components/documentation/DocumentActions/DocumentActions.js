import React, { useContext, useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

import { DocumentationContext } from "../../../context/DocumentationContext";

import Breadcrumb from "../../Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Markdown from "../../Markdown/Markdown";

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
    <article>
      <div className="page__actions">
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
          <Breadcrumb title="Documentation" link={ROUTES.DOCUMENTATION} />
          {id && <Breadcrumb title={editableDocument.title} link={`${ROUTES.DOCUMENTATION}/${id}`} />}
          <Breadcrumb title={action} active />
        </Breadcrumbs>
      </div>

      <section className="page__layout">
        <form onSubmit={handleSubmit} className="form">
          <label className="form__label">
            Title
            <input
              className="form__input"
              name="title"
              type="text"
              value={fields.title}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="form__label">
            Description
            <input
              className="form__input"
              name="description"
              type="text"
              value={fields.description}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="form__label">
            Content
            <textarea
              className=" form__input form__input--textarea form__input--markdown"
              name="content"
              value={fields.content}
              onChange={handleInputChange}
              required
            />
          </label>

          <button className="form__submit button" type="submit">
            {action} Document
          </button>
        </form>

        <Markdown>{fields.content}</Markdown>
      </section>
    </article>
  );
};

export default DocumentActions;
