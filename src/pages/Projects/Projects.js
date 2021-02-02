import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { ProjectsContext } from "../../context/ProjectsContext";

import useTitle from "../../hooks/useTitle";

import { HEADERS, ROUTES } from "../../constants/constants";

import { searchArrayOfObjects } from "../../utilities/utilities";

import ProjectRow from "../../components/Table/ProjectRow/ProjectRow";
import Search from "../../components/Search/Search";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Table from "../../components/Table/Table";

const title = "Tracker • Projects";

const Projects = () => {
  const [search, setSearch] = useState("");

  useTitle(title);

  const { loading, error, projects } = useContext(ProjectsContext);

  const results = searchArrayOfObjects(projects, search);

  const items = results || projects;

  return (
    <article className="page">
      <div className="page__actions">
        <Breadcrumbs>
          <Breadcrumb title="Dashboard" link={ROUTES.DASHBOARD} />
          <Breadcrumb title="Projects" active />
        </Breadcrumbs>

        <Link className="button button--add" to={`${ROUTES.PROJECTS}/add`}>
          Add Project
        </Link>
      </div>

      <Search search={search} setSearch={setSearch} placeholder="Search projects..." />

      <Table loading={loading} error={error} headers={HEADERS.PROJECTS} items={items} row={ProjectRow} />
    </article>
  );
};

export default Projects;
