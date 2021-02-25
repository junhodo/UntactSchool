import React from 'react';
import '../css/Notification.css';
import { Toast, ToastHeader } from 'reactstrap';

const Notification = () => {
  //  title  sender  time
  const dummy = [
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15'
    }
  ];

  const items = dummy.map(item => (
    <Toast>
      <ToastHeader>{item.title}</ToastHeader>
      <div className="itemContent">
        <span>{item.sender}</span>
        <span>{item.time}</span>
      </div>
    </Toast>
  ));
  return (
    <div className="Box">
      <h4>알림</h4>
      <div className="ItemBox">{items}</div>
    </div>
  );
};

export default Notification;
