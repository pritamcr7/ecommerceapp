import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Filter = ({ uniqueCategories }) => {
  const [selectedNumber, setSelectedNumber] = useState(undefined);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Filter Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {uniqueCategories.map((item) => {
          return (
            <Dropdown.Item
              value={item}
              id={item}
              onClick={(e) => setSelectedNumber(e.target.id)}
            >
              {item}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Filter;
