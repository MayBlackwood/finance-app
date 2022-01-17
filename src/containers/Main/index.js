import React, { useState } from 'react';
import DropdownElement from './../../components/Dropdown';
import { categories } from './../../tempData/categories';
import './styles.scss';

const Main = () => {
  const [activeCategoryName, setActiveCategoryName] = useState(null);

  const handleCategoryChange = (e) => {
    console.log(e);
    setActiveCategoryName(e.target.innerHTML);
  };

  return (
    <div className="mainContainer">
      <div>{activeCategoryName ? activeCategoryName : 'None'}</div>
      <DropdownElement
        items={categories.categories}
        title="Choose category"
        variant="Secondary"
        handleCategoryChange={handleCategoryChange}
        currentValue={activeCategoryName}
      />
    </div>
  );
};

export default Main;
