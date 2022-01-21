import React from 'react';
import { CAT_IMAGE } from '../../tempData/images';

import './styles.scss';

const Avatar = ({ imgUrl = CAT_IMAGE, altImg }) => {
  return (
    <div className="avatarContainer">
      {/* <figure> */}
        <img src={imgUrl} alt={altImg} className="avatarImg" />
      {/* </figure> */}
    </div>
  );
};

export default Avatar;
