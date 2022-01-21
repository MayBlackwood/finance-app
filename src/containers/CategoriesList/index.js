import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DropdownElement from '../../components/Dropdown';
import PieChart from '../../components/PieChart';
import { categories } from '../../tempData/categories';
import { LIST_API } from '../../constants';
import './styles.scss';

const CategoriesList = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const [graphData, setGraphData] = useState([]);

  // { label: 'item', value: 12 },
  // { label: 'item', value: 12 },
  // { label: 'item', value: 12 },

  const [categories, setCategories] = useState(null);
  const { id } = useParams();

  const addGraphData = (data) => {
    setGraphData(data);
  };

  const countOutcome = (items) => {
    let sum = 0;
    items.forEach((value) => {
      sum += value.cost * value.amount;
    });

    return sum;
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

  const getCategoriesById = async (listId) => {
    const { data } = await axios({
      method: 'GET',
      url: `${LIST_API}/${listId}/category`,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDI3ODcxNjJ9.fCk3Gmu0EInpzPRRBQNYf_zbAFG27Hb230Lbmfyv0pU',
      },
    });
    const newCategories = data.map((category) => {
      return { ...category, outcomeSum: countOutcome(category.items) };
    });

    setCategories(newCategories);
  };

  useEffect(() => {
    console.log('categories', categories);
    if (categories) {
      const chartData = categories.map((category) => {
        return { label: category.title, value: category.outcomeSum };
      });

      setGraphData(chartData);
    }
  }, [categories]);

  useEffect(() => {
    getCategoriesById(id);
  }, [id]);

  return (
    <div className="outcomeContainer">
      <div className="outcomeDataContainer">
        <h4>Outcomes | {id || null}</h4>
        <hr className="divider"></hr>

        <div className="list">
          {!categories && 'No data'}
          {categories &&
            categories.map(({ id, title, items }) => {
              return (
                <div className="listItem" key={id}>
                  {title}
                </div>
              );
            })}
        </div>
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
