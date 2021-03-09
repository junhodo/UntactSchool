import React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import groupContentJson from '../../../static/data/groupContent.json';
import '../../../css/group/Main/Main.css';

const Main = () => {
  const groupContent = groupContentJson.slice();
  return (
    <div className="Main">
      <div className="containers">
        {groupContent.map(() => (
          <ContentContainer />
        ))}
      </div>
    </div>
  );
};

export default Main;
