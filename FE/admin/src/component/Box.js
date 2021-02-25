import React from 'react';
import '../css/Box.css';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Box = data => {
  console.log(data.data);

  const items = data.data.map(item => (
    <Toast>
      <ToastHeader>{item.defendant}</ToastHeader>
      <ToastBody>{item.classfication}</ToastBody>
    </Toast>
  ));
  return <div className="ItemBox">{items}</div>;
};

export default Box;
