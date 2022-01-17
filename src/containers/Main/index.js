import React, { useState, useEffect } from 'react';
import DropdownElement from './../../components/Dropdown';
import PieChart from '../../components/PieChart';
import { categories } from './../../tempData/categories';
import './styles.scss';

const Main = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const [graphData, setGraphData] = useState([]);

  const addGraphData = (data) => {
    setGraphData(data);
  };

  useEffect(() => {
    const arr = activeCategories.map((item) => {
      return { label: item, value: 12 };
    });
    addGraphData(arr);
  }, [activeCategories]);

  const handleCategoryChange = (e) => {
    const newElement = activeCategories.find(
      (item) => item === e.target.innerHTML,
    );

    if (newElement) {
      setActiveCategories(
        activeCategories.filter((el) => el !== e.target.innerHTML),
      );
    } else {
      setActiveCategories([...activeCategories, e.target.innerHTML]);
    }
  };

  return (
    <div className="mainContainer">
      <div>{activeCategories ? activeCategories.join(' ,') : 'None'}</div>
      <DropdownElement
        items={categories.categories}
        title="Choose category"
        variant="Secondary"
        handleCategoryChange={handleCategoryChange}
        currentValue={activeCategories}
      />
      <div>
        <PieChart graphData={graphData} />
      </div>
    </div>
  );
};

export default Main;
