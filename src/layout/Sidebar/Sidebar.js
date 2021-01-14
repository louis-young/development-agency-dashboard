import React from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <h2>Sidebar</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/domains">Domains</Link>
          </li>
          <li>
            <Link to="/documentation">Documentation</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
