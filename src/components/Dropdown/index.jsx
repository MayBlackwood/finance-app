import React from 'react';
import './styles.scss';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

//'Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'

const DropdownElement = ({
  variant = 'Primary',
  items = [],
  title = 'Select',
}) => {
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
        className="dropdownContainer"
      >
        <Dropdown.Item className="dropdownItem" eventKey="1">
          Action
        </Dropdown.Item>
        {/* <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item> */}
      </DropdownButton>
    </>
  );
};

export default DropdownElement;
