import { React, useState } from 'react';
import { Toast, ToastHeader } from 'reactstrap';
import '../css/Notification.css';
import userProfile from '../static/profileExample.jpg';

const PersonInfo = () => {
  // const reportedDummy = ['', '욕설', '도배', '성희롱'];
  // const groupDummy = ['토익9990', '정처기', '투자공부방'];
  // nickname    userid    name    join   id   group  reported  age  gender
  const dummy = [
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '1',
      group: ['토익9990방', '정처기방', '투자공부방'],
      reported: ['욕설', '욕설', '도배'],
      age: '24',
      gender: 'male'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '2',
      group: ['토익9990방', '정처기방', '투자공부방'],
      reported: ['욕설', '욕설', '도배'],
      age: '24',
      gender: 'male'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '3',
      group: ['토익9990방', '정처기방', '투자공부방'],
      reported: ['욕설', '욕설', '도배'],
      age: '24',
      gender: 'male'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '4',
      group: ['토익9990방', '정처기방', '투자공부방'],
      reported: ['욕설', '욕설', '도배'],
      age: '24',
      gender: 'male'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '5',
      group: ['토익9990방', '정처기방', '투자공부방'],
      reported: ['욕설', '욕설', '도배'],
      age: '24',
      gender: 'male'
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
      {/* css는 App.css 에 있음 */}
      <div className="itemContent">
        <span>{item.name}</span>
        <span>{item.userid}</span>
        <span>{item.join}</span>
      </div>
      <div
        className={`notificationContent${
          { willShow }.willShow === item.id ? '' : ' notificationContentHidden'
        }
        }`}
      >
        <div className="userProfile">
          <img src={userProfile} alt="user profile" />
          <i className="fas fa-camera fa-2x" />
        </div>
        <div className="userGroup">
          <span>가입한 그룹</span>
          <span>
            {item.group.map(i => (
              <li>{i}</li>
            ))}
          </span>
        </div>
        <div className="userReported">
          <span>피신고내역 : </span>
          <span>
            {item.reported.map(i => (
              <li>{i}</li>
            ))}
          </span>
        </div>
        <div className="userAge">
          <span>나이 : </span>
          <span>{item.age}</span>
        </div>
        <div className="userGender">
          <span>성별 : </span>
          <span>{item.gender}</span>
        </div>
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
