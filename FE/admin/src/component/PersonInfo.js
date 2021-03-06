import { React, useState } from 'react';
import '../css/Notification.css';
import '../css/PersonInfo.css';
import { Toast, ToastHeader, Form, Input, Button } from 'reactstrap';
import userProfile from '../static/profileExample.jpg';

const PersonInfo = () => {
  // nickname    userid    name    join   id   group  reported  age  gender
  const dummy = [
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '1',
      group: ['토익9990방', '정처기방', '투자공부방', '독서방', '한자1급방'],
      reported: ['욕설', '욕설', '도배'],
      age: '24',
      gender: 'male'
    },
    {
      nickname: '길무짱짱맨',
      userid: 'gilmujjang',
      name: '길무민',
      join: '2021-02-21',
      id: '2',
      group: ['정처기방', '투자공부방', '독서방', '헬스'],
      reported: [],
      age: '124',
      gender: 'male'
    },
    {
      nickname: '무과장',
      userid: 'musuni',
      name: '민무순',
      join: '2021-01-15',
      id: '3',
      group: ['금융공부', '정처기방', '투자공부방'],
      reported: ['욕설'],
      age: '24',
      gender: 'female'
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
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24',
      id: '6',
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
      id: '7',
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
      id: '8',
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
      id: '9',
      group: ['토익9990방', '정처기방', '투자공부방'],
      reported: ['욕설', '욕설', '도배'],
      age: '24',
      gender: 'male'
    }
  ];
  const [userMakeMode, setUserMakeMode] = useState(false);
  const [willShow, setWillShow] = useState(0);

  const btnClick = () => setUserMakeMode(prev => !prev);

  const notificationClick = event => {
    event.preventDefault();
    setWillShow(event.currentTarget.id);
    if (event.currentTarget.id === willShow) {
      setWillShow(0);
    }
  };

  const userMaker = (
    <div className={userMakeMode ? '' : 'notificationContentHidden'}>
      <Form className="noteWriter">
        <div className="messageTargetBox needMargin">
          <span>아이디</span>
          <Input type="text" />
        </div>
        <div className="messageTargetBox needMargin">
          <span>비밀번호</span>
          <Input type="text" />
        </div>
        <div className="messageTargetBox needMargin">
          <span>닉네임</span>
          <Input type="text" />
        </div>
        <div className="messageTargetBox needMargin">
          <span>이름</span>
          <Input type="text" />
        </div>
        <div className="messageTargetBox needMargin">
          <span>나이</span>
          <Input type="text" />
        </div>
        <div className="messageTargetBox needMargin">
          <span>성별</span>
          <Input type="text" />
        </div>
        <div className="messageTargetBox needMargin">
          <span>이메일</span>
          <Input type="text" />
        </div>
        <div className="messageTargetBox needMargin">
          <span>전화번호</span>
          <Input type="text" />
        </div>
        <Button>전송</Button>
      </Form>
    </div>
  );

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
        <div className="userInfo">
          <div className="userProfile">
            <img src={userProfile} alt="user profile" />
            <i className="fas fa-camera fa-2x" />
          </div>
          <div className="userBox">
            <div className="userAge">
              <span>나이 :</span>
              <span>{item.age}</span>
            </div>
            <div className="userGender">
              <span>성별 :</span>
              <span>{item.gender}</span>
            </div>
            <div className="userJoin">
              <span>가입정보</span>
              <span>{item.join}</span>
            </div>
          </div>
        </div>
        <div className="userGroup">
          <span className="boldText">가입한 그룹</span>
          <span className="flexWrap">
            {item.group.map(i => (
              <span className="targetUser">{i}</span>
            ))}
          </span>
        </div>
        <div className="userReported">
          <span className="boldText">피신고내역</span>
          <span className="flexWrap">
            {item.reported.map(i => (
              <span className="targetUser">{i}</span>
            ))}
          </span>
        </div>
      </div>
    </Toast>
  ));

  return (
    <div className="Box">
      <div className="contentFlex">
        <span>
          <h4>회원 정보</h4>
        </span>
        <span
          className="userMakerBtn noneBorder"
          onClick={btnClick}
          role="button"
          tabIndex={0}
          onKeyPress={btnClick}
        >
          <i className="fas fa-plus-circle fa-lg" />
        </span>
      </div>
      <div className="ItemBox">
        <div>{userMaker}</div>
        {personInfo}
      </div>
    </div>
  );
};

export default PersonInfo;
