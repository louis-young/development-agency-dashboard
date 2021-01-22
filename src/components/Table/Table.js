import React from "react";

import "./Table.scss";

const Table = ({ loading, error, headers, items, item: Item }) => {
  if (loading) {
    return <p>Loading items...</p>;
  }

  if (error) {
    return <p>Error loading items.</p>;
  }

  if (!items || !items.length) {
    return <p>No items.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          {headers.map((header) => (
            <th className="table__header" key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
