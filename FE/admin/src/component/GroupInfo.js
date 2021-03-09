import { React, useState } from 'react';
import { Toast, ToastHeader } from 'reactstrap';
import '../css/Notification.css';

const GroupInfo = () => {
  // group  description  people  limit  time   id  member  manager
  const dummy = [
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '6',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '1',
      member: [
        '민무길',
        '길무짱',
        '민길무',
        '이지훈',
        '김정환',
        '타락파워전사'
      ],
      manager: '길무짱'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '6',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '2',
      member: [
        '민무길',
        '길무짱',
        '민길무',
        '이지훈',
        '김정환',
        '타락파워전사'
      ],
      manager: '김정환'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '6',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '3',
      member: [
        '민무길',
        '길무짱',
        '민길무',
        '이지훈',
        '김정환',
        '타락파워전사'
      ],
      manager: '이지훈'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '6',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '4',
      member: [
        '민무길',
        '길무짱',
        '민길무',
        '이지훈',
        '김정환',
        '타락파워전사'
      ],
      manager: '길무짱'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '6',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '5',
      member: [
        '민무길',
        '길무짱',
        '민길무',
        '이지훈',
        '김정환',
        '타락파워전사'
      ],
      manager: '길무짱'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '6',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '6',
      member: [
        '민무길',
        '길무짱',
        '민길무',
        '이지훈',
        '김정환',
        '타락파워전사'
      ],
      manager: '길무짱'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '6',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '7',
      member: [
        '민무길',
        '길무짱',
        '민길무',
        '이지훈',
        '김정환',
        '타락파워전사'
      ],
      manager: '길무짱'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '6',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '8',
      member: [
        '민무길',
        '길무짱',
        '민길무',
        '이지훈',
        '김정환',
        '타락파워전사'
      ],
      manager: '길무짱'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '6',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '9',
      member: [
        '민무길',
        '길무짱',
        '민길무',
        '이지훈',
        '김정환',
        '타락파워전사'
      ],
      manager: '길무짱'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@ 열심히 할사람만 들어오세요!!!',
      people: '6',
      limit: '50',
      time: '2021-02-24 : 21:07',
      id: '10',
      member: [
        '민무길',
        '길무짱',
        '민길무',
        '이지훈',
        '김정환',
        '타락파워전사'
      ],
      manager: '길무짱'
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
        <div>{item.description}</div>
        <div className="targetUserList">
          {item.member.map(i => (
            <span
              className={`targetUser${i === item.manager ? ' manager' : ''}`}
            >
              {i}
            </span>
          ))}
        </div>
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
