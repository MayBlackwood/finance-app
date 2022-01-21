import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Avatar from '../../components/Avatar';
import PlusButton from '../../components/PlusButton';
import './styles.scss';
import { API, LIST_API } from './../../constants';

const Profile = () => {
  const userName = 'sick_or'; // temporary data
  const [dataList, setDataList] = useState(null);

  const getDataList = async () => {
    const { data } = await axios({
      method: 'GET',
      url: LIST_API,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDI3ODcxNjJ9.fCk3Gmu0EInpzPRRBQNYf_zbAFG27Hb230Lbmfyv0pU',
      },
    });

    setDataList(data);
  };

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <div className="profileContainer">
      <h2>Profile</h2>
      <div className="profileHeader">
        <Avatar altImg={userName} />
        <div className="username">{userName}</div>
      </div>
      <div className="categoriesList">
        {!dataList && 'No data'}
        {dataList &&
          dataList.map(({ id, title, categories }) => {
            return (
              <Link to={`/categories/${id}`} key={id}>
                <div className="listItem">{title}</div>
              </Link>
            );
          })}
        <PlusButton />
      </div>
    </div>
  );
};

export default Profile;
