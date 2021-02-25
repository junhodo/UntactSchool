// import { React, useState } from 'react';
import React from 'react';
import '../css/Notification.css';
import { Toast, ToastHeader } from 'reactstrap';

const Notification = () => {
  // const [editing, setEditing] = useState(false);

  //  title  sender  time  content
  const dummy = [
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.'
    }
  ];

  const notificationClick = event => {
    event.preventDefault();
    console.log(event.target);
    // setEditing(prev => !prev);
  };

  const items = dummy.map(item => (
    <Toast onClick={notificationClick}>
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
