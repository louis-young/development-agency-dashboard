import React, { useContext, useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

import { ClientsContext } from "../../../context/ClientsContext";
import { ProjectsContext } from "../../../context/ProjectsContext";

import Breadcrumb from "../../Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Loading from "../../Loading/Loading";

const initialFields = {
  client: "",
  stage: "",
  status: "",
  type: "",
  notes: "",
  action: "",
};

const STAGES = ["Research", "Concept", "Design", "Build", "Review", "Launch"];

const STATUSES = ["Working", "Waiting", "Chasing", "Parked"];

const TYPES = ["React", "Next", "Gatsby", "Static"];

const ProjectForm = () => {
  const { id } = useParams();

  const history = useHistory();

  const editing = id;

  const [fields, setFields] = useState(initialFields);

  const { projects, editMutation, addMutation } = useContext(ProjectsContext);

  const { clients } = useContext(ClientsContext);

  const editableProject = projects?.find((project) => project.id === id);

  useEffect(() => {
    if (!editableProject) {
      return;
    }

    setFields(editableProject);
  }, [editableProject]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editing) {
      editMutation.mutate(fields);
    } else {
      addMutation.mutate(fields);
    }

    history.push(ROUTES.PROJECTS);
  };

  const handleInputChange = (event) => {
    const { name, value, options } = event.target;

    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));

    // Add searchable (company) field to document.
    if (!options) {
      return;
    }

    const company = event.target.options[event.target.selectedIndex].dataset.company;

    if (!company) {
      return;
    }

    setFields((fields) => ({
      ...fields,
      company,
    }));
  };

  if (editing && !editableProject) {
    return <Loading inline />;
  }

  const currentClient = clients?.find((client) => client.id === editableProject?.client);

  if (editing && !currentClient) {
    return <Loading inline />;
  }

  const action = editing ? "Edit" : "Add";

  return (
    <article>
      <div className="page__actions">
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
          <Breadcrumb title="Projects" link={ROUTES.PROJECTS} />
          {id && <Breadcrumb title={currentClient.company} link={`${ROUTES.CLIENTS}/${currentClient.id}`} />}
          <Breadcrumb title={action} active />
        </Breadcrumbs>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <label className="form__label">
          Client
          <select
            name="client"
            className="form__input form__input--select"
            onChange={handleInputChange}
            value={fields.client}
            required
          >
            {!editableProject && <option value="">Select a client...</option>}
            {clients?.map((client) => (
              <option key={client.id} value={client.id} data-company={client.company}>
                {client.company}
              </option>
            ))}
          </select>
        </label>

        <label className="form__label">
          Stage
          <select
            name="stage"
            className="form__input form__input--select"
            onChange={handleInputChange}
            value={fields.stage}
            required
          >
            {!fields.stage && <option value="">Select a stage...</option>}
            {STAGES.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </label>

        <label className="form__label">
          Status
          <select
            name="status"
            className="form__input form__input--select"
            onChange={handleInputChange}
            value={fields.status}
            required
          >
            {!fields.status && <option value="">Select a status...</option>}
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <label className="form__label">
          Type
          <select
            name="type"
            className="form__input form__input--select"
            onChange={handleInputChange}
            value={fields.type}
            required
          >
            {!fields.type && <option value="">Select a type...</option>}
            {TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="form__label">
          Notes
          <input className="form__input" name="notes" type="text" value={fields.notes} onChange={handleInputChange} />
        </label>

        <label className="form__label">
          Next Action
          <input
            className="form__input"
            name="action"
            type="date"
            value={fields.action}
            onChange={handleInputChange}
            required
          />
        </label>

        <button className="form__submit button" type="submit">
          {action} Project
        </button>
      </form>
    </article>
  );
};

export default ProjectForm;
