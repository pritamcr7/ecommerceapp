import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const Filter = ({ filteredItem, uniqueCategories }) => {
  return (
    <div className="filter_button">
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
                key={item}
                onClick={(e) => filteredItem(e.target.id)}
              >
                {item}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Filter;
