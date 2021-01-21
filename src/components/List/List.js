import React from "react";

import "./List.scss";

const List = ({ loading, error, items, item: Item }) => {
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
    <>
      <ul className="list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default List;
