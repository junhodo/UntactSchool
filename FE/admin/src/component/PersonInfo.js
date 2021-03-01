import { React, useState } from 'react';
import { Toast, ToastHeader } from 'reactstrap';
import '../css/Notification.css';

const PersonInfo = () => {
  // nickname    userid    name    join   id   group
  const dummy = [
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '1',
      group: ['토익9990', '정처기', '투자공부방']
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '2',
      group: ['토익9990', '정처기', '투자공부방']
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '3',
      group: ['토익9990', '정처기', '투자공부방']
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '4',
      group: ['토익9990', '정처기', '투자공부방']
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '5',
      group: ['토익9990', '정처기', '투자공부방']
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '6',
      group: ['토익9990', '정처기', '투자공부방']
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '7',
      group: ['토익9990', '정처기', '투자공부방']
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '8',
      group: ['토익9990', '정처기', '투자공부방']
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '9',
      group: ['토익9990', '정처기', '투자공부방']
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '10',
      group: ['토익9990', '정처기', '투자공부방']
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '11',
      group: ['토익9990', '정처기', '투자공부방']
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

  const personInfo = dummy.map(item => (
    <Toast onClick={notificationClick} id={item.id}>
      <ToastHeader>{item.nickname}</ToastHeader>
      <div className="itemContent">
        <span>{item.userid}</span>
        <span>{item.name}</span>
        <span>{item.join}</span>
      </div>
      <div
        className={`notificationContent${
          { willShow }.willShow === item.id ? '' : ' notificationContentHidden'
        }
        }`}
      >
        {item.group}
      </div>
    </Toast>
  ));
  return (
    <div className="Box">
      <h4>회원 정보</h4>
      <div className="ItemBox">{personInfo}</div>
    </div>
  );
};

export default PersonInfo;
