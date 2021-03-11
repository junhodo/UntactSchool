import { React, useState } from 'react';
import { Toast, ToastHeader } from 'reactstrap';
import '../css/Notification.css';

const GroupInfo = () => {
  // group  description  people  limit  time   id
  const dummy = [
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '1'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '2'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '3'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '4'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '5'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '6'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '7'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '8'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '9'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '10'
    }
  ];

  const [willShow, setWillShow] = useState(0);

  const notificationClick = event => {
    event.preventDefault();
    setWillShow(event.currentTarget.id);
    if (event.currentTarget.id === willShow) {
      setWillShow(0);
    }
  };

  const groupInfo = dummy.map(item => (
    <Toast onClick={notificationClick} id={item.id}>
      <ToastHeader>{item.group}</ToastHeader>
      <div className="itemContent">
        <span>{item.time}</span>
        <span>
          {item.people}/{item.limit}
        </span>
      </div>
      <div
        className={`notificationContent${
          { willShow }.willShow === item.id ? '' : ' notificationContentHidden'
        }
        }`}
      >
        {item.description}
      </div>
    </Toast>
  ));
  return (
    <div className="Box">
      <h4>그룹정보</h4>
      <div className="ItemBox">{groupInfo}</div>
    </div>
  );
};

export default GroupInfo;
