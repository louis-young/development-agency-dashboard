import React, { useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

const getInitialValues = (fields) => {
  const initialValues = {};

  fields.forEach(({ name }) => {
    initialValues[name] = "";
  });

  return initialValues;
};

const Form = ({ name, items, fields, editMutation, addMutation, success }) => {
  const { id } = useParams();

  const history = useHistory();

  const editing = id;

  const initialValues = getInitialValues(fields);

  const [values, setValues] = useState(initialValues);

  const editableItem = items?.find((item) => item.id === id);

  useEffect(() => {
    if (!editableItem) {
      return;
    }

    setValues(editableItem);
  }, [editableItem]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editing) {
      editMutation.mutate(values);
    } else {
      addMutation.mutate(values);
    }

    history.push(success);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  if (editing && !editableItem) {
    return <p>No {name} found.</p>;
  }

  const action = editing ? "Edit" : "Add";

  return (
    <div>
      <h1>
        {action} {name}
      </h1>

      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <label key={field.name}>
            {field.label}
            {field.type === "textarea" ? (
              <textarea name={field.name} value={values[field.name]} onChange={handleChange} required />
            ) : (
              <input name={field.name} type={field.type} value={values[field.name]} onChange={handleChange} required />
            )}
          </label>
        ))}

        <button type="submit">
          {action} {name}
        </button>
      </form>
    </div>
  );
};

export default Form;
