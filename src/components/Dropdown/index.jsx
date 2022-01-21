import React from 'react';
import './styles.scss';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

//'Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'

const DropdownElement = ({
  variant = 'Primary',
  items = [],
  title,
  handleCategoryChange,
  currentValue = items,
}) => {
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={title}
        className="dropdownContainer"
      >
        {items.map((item) => {
          return (
            <Dropdown.Item
              onClick={handleCategoryChange}
              className="dropdownItem"
              eventKey="1"
              key={item.id}
              active={currentValue.find((value) => value === item.name)}
            >
              {item.name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </>
  );
};

export default DropdownElement;
