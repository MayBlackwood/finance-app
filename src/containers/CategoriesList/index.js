import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DropdownElement from '../../components/Dropdown';
import PieChart from '../../components/PieChart';
import { categories } from '../../tempData/categories';
import './styles.scss';

const CategoriesList = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const [graphData, setGraphData] = useState([
    { label: 'item', value: 12 },
    { label: 'item', value: 12 },
    { label: 'item', value: 12 },
  ]);
  const { id } = useParams();

  console.log('id', id);

  const addGraphData = (data) => {
    setGraphData(data);
  };

  useEffect(() => {
    const arr = activeCategories.map((item) => {
      return { label: item, value: 12 };
    });
    // addGraphData(arr);
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
    <div className="outcomeContainer">
      <div className="outcomeDataContainer">
        <h4>Outcomes | {id || null}</h4>
        <hr className="divider"></hr>
      </div>
      <div className="outcomeChartContainer">
        <div>{activeCategories ? activeCategories.join(' ,') : 'None'}</div>
        <div>Category id: {id || null}</div>
        <div>
          <PieChart graphData={graphData} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
