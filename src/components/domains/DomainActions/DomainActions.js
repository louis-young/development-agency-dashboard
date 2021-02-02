import React, { useContext, useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

import { ROUTES } from "../../../constants/constants";

import { DomainsContext } from "../../../context/DomainsContext";
import { ClientsContext } from "../../../context/ClientsContext";

import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb/Breadcrumb";
import Loading from "../../Loading/Loading";

const initialFields = {
  company: "",
  domain: "",
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

  if (!domains) {
    return <Loading />;
  }

  if (editing && !editableDomain) {
    return <p>No domain found.</p>;
  }

  const action = editing ? "Edit" : "Add";

  const defaultValue = editableDomain?.company || "";

  return (
    <article>
      <div className="page__actions">
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
          <Breadcrumb title="Domains" link={ROUTES.DOMAINS} />
          {id && <Breadcrumb title={editableDomain.domain} link={`${ROUTES.DOMAINS}/${id}`} />}
          <Breadcrumb title={action} active />
        </Breadcrumbs>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <label className="form__label">
          Company
          <select
            name="company"
            className="form__input form__input--select"
            defaultValue={defaultValue}
            onChange={handleInputChange}
            required
          >
            {!editableDomain && <option value="">Select a company...</option>}
            {clients?.map((client) => (
              <option key={client.id} value={client.id}>
                {client.company}
              </option>
            ))}
          </select>
        </label>

        <label className="form__label">
          Domain
          <input
            className="form__input"
            name="domain"
            type="text"
            value={fields.domain}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="form__label">
          Platform
          <input
            className="form__input"
            name="platform"
            type="text"
            value={fields.platform}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className="form__label">
          Renewal
          <input
            className="form__input"
            name="renewal"
            type="date"
            value={fields.renewal}
            onChange={handleInputChange}
            required
          />
        </label>

        <button className="form__submit button" type="submit">
          {action} Domain
        </button>
      </form>
    </article>
  );
};

export default DomainActions;
