import React from "react";

import useTitle from "../../hooks/useTitle";

const title = "Tracker • Projects";

const Projects = () => {
  useTitle(title);

  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
};

export default Projects;
