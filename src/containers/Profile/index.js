import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Profile = () => {
  return (
    <div className="profileContainer">
      Profile
      <Link to="/categories">About</Link>
    </div>
  );
};

export default Profile;
