import React, { useState, useEffect } from 'react';
import Media from 'react-bootstrap/Media';
import '../../../css/Profile.css';
import Pepe from '../../../static/image/alone_pepe.jpg';
import { PersonIcon } from '../../../static/svg/icon';

function Profile() {
  const [image, setImage] = useState(null);

  const onChangeImage = () => {
    setImage(Pepe);
  };

  useEffect(() => {
    onChangeImage();
    console.log(image);
  }, []);

  return (
    <div className="profile">
      <Media as="li">
        <div className="profileWrapper">
          <button
            type="button"
            className="profileIamge"
            onClick={() => setImage(null)}
          >
            {image ? <img src={image} alt="" /> : <PersonIcon />}
          </button>
        </div>
        <div className="profileInfo">
          <h6>김정환</h6>
          <p>
            asdfg32145
            <br />
            <small>정보 . . . </small>
          </p>
        </div>
      </Media>
    </div>
  );
}

export default Profile;
