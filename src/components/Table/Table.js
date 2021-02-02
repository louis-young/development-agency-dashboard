import React from "react";

import { slugifyString } from "../../utilities/utilities";

import Loading from "../Loading/Loading";
import Notification from "../Notification/Notification";

import "./Table.scss";

const Table = ({ loading, error, headers, items, row: Row }) => {
  if (loading) {
    return <Loading inline />;
  }

  if (error) {
    return <Notification message="Error loading items." />;
  }

  if (!items) {
    return <Loading inline />;
  }

  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          {headers.map((header) => (
            <th className={`table__header table__header--${slugifyString(header)}`} key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {items.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
