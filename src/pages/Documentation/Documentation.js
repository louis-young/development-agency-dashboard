import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { DocumentationContext } from "../../context/DocumentationContext";

import useTitle from "../../hooks/useTitle";

import { ROUTES } from "../../constants/constants";

import { searchArrayOfObjects } from "../../utilities/utilities";

import Document from "../../components/documentation/Document/Document";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/Table";

const title = "Tracker • Documentation";

const headers = ["Title", "Description", "Actions"];

const Documentation = () => {
  const [search, setSearch] = useState("");

  useTitle(title);

  const { loading, error, documentation } = useContext(DocumentationContext);

  const results = searchArrayOfObjects(documentation, search);

  const items = results || documentation;

  return (
    <article className="page">
      <div className="page__actions">
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
          <Breadcrumb title="Documentation" active />
        </Breadcrumbs>

        <Link className="button" to={`${ROUTES.DOCUMENTATION}/add`}>
          Add Document
        </Link>
      </div>

      <Search search={search} setSearch={setSearch} placeholder="Search documentation..." />

      <Table loading={loading} error={error} headers={headers} items={items} item={Document} />
    </article>
  );
};

export default Documentation;
