import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DropdownElement from '../../../components/Dropdown';
import PieChart from '../../../components/PieChart';
import { categories } from '../../../tempData/categories';
import './styles.scss';

const Categories2 = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const { id } = useParams();

  console.log('id', id);

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
      <div>Category id: {id || null}</div>
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

export default Categories2;
