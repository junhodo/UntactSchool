import { React, useState } from 'react';
import '../css/Notification.css';
import { Toast, ToastHeader } from 'reactstrap';

const Notification = () => {
  const [willShow, setWillShow] = useState(0);
  //  title  sender  time  content  id
  const dummy = [
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '1'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '2'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '3'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '4'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '5'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '6'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '7'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '8'
    }
  ];

  const notificationClick = event => {
    event.preventDefault();
    setWillShow(event.currentTarget.id);
    if (event.currentTarget.id === willShow) {
      setWillShow(0);
    }
  };

  const items = dummy.map(item => (
    <Toast onClick={notificationClick} id={item.id}>
      <ToastHeader>{item.title}</ToastHeader>
      <div className="itemContent">
        <span>{item.sender}</span>
        <span>{item.time}</span>
      </div>
      <div
        className={`notificationContent${
          { willShow }.willShow === item.id ? '' : ' notificationContentHidden'
        }
        }`}
      >
        {item.content}
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
