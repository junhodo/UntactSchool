import { React, useState } from 'react';
import '../css/Notification.css';
import { Toast, ToastHeader, Form, Input, Button, Label } from 'reactstrap';

const Notification = () => {
  const [willShow, setWillShow] = useState(0);
  const [noteSave, setNoteSave] = useState('');
  const [noteWriteMode, setNoteWriteMode] = useState(false);
  //  title  sender  receiver  time  content  id
  const [dummy, setDummy] = useState([
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      receiver: ['alsanrlf'],
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '1'
    },
    {
      title: '그룹 삭제 안내',
      sender: 'GM길무',
      receiver: [
        'alsanrlf',
        'gilmujjang',
        'alsanrlf1',
        'alsanrlf2',
        'alsanrlf3',
        'alsanrlf4'
      ],
      time: '2021-02-16 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 불건전한 그룹활동으로 인해 그룹을 삭제했음을 알려드립니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '4'
    },
    {
      title: '제재내역 안내',
      sender: 'GM길무',
      receiver: ['alsanrlf', 'gilmujjang'],
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '2'
    },
    {
      title: '정기정검 공지',
      sender: 'GM길무',
      receiver: ['alsanrlf', 'gilmujjang'],
      time: '2021-02-24 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '3'
    },
    {
      title: '오류 안내',
      sender: 'GM길무',
      receiver: ['alsanrlf', 'gilmujjang', 'alsanrlf1', 'alsanrlf2'],
      time: '2021-02-14 : 21:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '5'
    },
    {
      title: '제제내역 안내',
      sender: 'GM길무',
      receiver: ['gilmujjang'],
      time: '2021-02-23 : 11:15',
      content:
        '안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.안녕하세요 GM길무 입니다. 내일 새볍 04시부터 약 2시간 정도 서버점검이 있을 예정입니다.',
      id: '6'
    }
  ]);
  const dummyUser = [
    'alsanrlf',
    'gilmujjang',
    'minmugil',
    'alsanrlf1',
    'alsanrlf2',
    'alsanrlf3',
    'alsanrlf4',
    'alsanrlf5'
  ];
  const [targetUser, setTargetUser] = useState([]);
  const [target, setTarget] = useState('');
  const [headSave, setHeadSave] = useState('');
  let makeid = 7; // 아이디생성을 위한 임시값

  const notificationClick = event => {
    event.preventDefault();
    setWillShow(event.currentTarget.id);
    if (event.currentTarget.id === willShow) {
      setWillShow(0);
    }
  };

  const noteReceiverdUser = event => {
    event.preventDefault();
    console.log(event.currentTarget.id);
  };

  const noteChange = e => {
    setNoteSave(e.target.value);
    const ta = e.target;
    ta.style.height = 'auto';
    ta.style.height = `${ta.scrollHeight}px`;
  };

  const headChange = e => {
    setHeadSave(e.target.value);
    const ta = e.target;
    ta.style.height = 'auto';
    ta.style.height = `${ta.scrollHeight}px`;
  };

  const targetChange = e => {
    if (e.key === 'Enter') {
      if (dummyUser.includes(target)) {
        if (targetUser.includes(target) === false) {
          setTargetUser(targetUser.concat(target));
        } else {
          alert('이미 존재하는 사용자 입니다');
        }
      } else {
        alert('존재하지 않는 사용자 입니다');
      }

      setTarget('');
      e.preventDefault();
    } else {
      setTarget(e.target.value);
    }
  };

  const btnClick = () => setNoteWriteMode(prev => !prev);

  const noteSender = () => {
    if (noteSave === '') {
      alert('내용을 입력하세요');
      return;
    }
    if (headSave === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (targetUser.length === 0) {
      alert('전송대상을 설정하세요');
      return;
    }
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const now = `${year}-${month}-${day} | ${hour}:${minute}`;
    const newDummy = {
      title: headSave,
      sender: '길무짱',
      receiver: targetUser,
      content: noteSave,
      id: String(makeid),
      time: now
    };
    makeid += 1;
    setDummy(dummy.concat(newDummy));
    setNoteSave('');
    setHeadSave('');
    setTarget('');
    setTargetUser([]);
    setNoteWriteMode(false);
    alert('전송되었습니다');
    // textarea.style.height = 'auto';
    // 새로추가한게  위로 가야 하는데 concat은 뒤로만 보내고 unshift 는 에러가 난다.
  };

  const targetClicked = item => {
    console.log(item);
  };

  const notificationItem = dummy.map(item => (
    <Toast>
      <ToastHeader onClick={notificationClick} id={item.id}>
        {item.title}
      </ToastHeader>
      <div
        className="itemContent noneBorder"
        onClick={notificationClick}
        id={item.id}
        role="button"
        tabIndex={0}
        onKeyPress={notificationClick}
      >
        <span>{item.sender}</span>
        <span>{item.time}</span>
      </div>
      <div
        className={`notificationContent${
          { willShow }.willShow === item.id ? ' notificationShow' : ''
        }
        }`}
      >
        <div className="receiver">
          <span className="flexWrap">
            {item.receiver.map(i => (
              <span
                className="targetUser noneBorder"
                onClick={noteReceiverdUser}
                id={i}
                role="button"
                tabIndex={0}
                onKeyPress={noteReceiverdUser}
              >
                {i}
              </span>
            ))}
          </span>
        </div>
        <div
          className="noneBorder upperBorder"
          onClick={notificationClick}
          id={item.id}
          role="button"
          tabIndex={0}
          onKeyPress={notificationClick}
        >
          {item.content}
        </div>
      </div>
    </Toast>
  ));

  const targetUserList = targetUser.map(item => (
    <span
      role="button"
      tabIndex={0}
      className="targetUser"
      onClick={targetClicked(item)}
      onKeyPress={targetClicked(item)}
    >
      {item}
    </span>
  ));
  /// span 을 클릭해도 console 이 찍히지 않는다 onClick notificationClick 이 Toast 전체에
  /// 쓰여서 span 도 거기에 따르기 때문인거 같다. notificationClick 을 span 을 제외한 요소들에
  /// 따로 설정해주면 될듯하다
  const messageMaker = (
    <div className={noteWriteMode ? '' : 'notificationContentHidden'}>
      <Form className="noteWriter">
        <div className="messageTargetBox needMargin">
          <span>전송대상</span>
          <Input
            type="text"
            value={target}
            onChange={targetChange}
            onKeyPress={targetChange}
          />
        </div>
        <div className="needMargin">
          <Label check>
            <Input type="checkbox" /> 전체전송
          </Label>
        </div>
        <div className="targetUserList">{targetUserList}</div>
        <div className="toastMargin needMargin">
          <Input
            type="textarea"
            placeholder="제목을 입력하세요"
            value={headSave}
            onChange={headChange}
          />
        </div>
        <div className="needMargin">
          <Input
            type="textarea"
            placeholder="내용을 입력하세요"
            value={noteSave}
            onChange={noteChange}
          />
        </div>
        <Button onClick={noteSender}>전송</Button>
      </Form>
    </div>
  );

  return (
    <div className="Box">
      <div className="contentFlex">
        <h4>알림</h4>
        <button type="button" className="noteMakeBtn" onClick={btnClick}>
          알림작성
        </button>
      </div>
      <div className="ItemBox">
        <div className="buttonBox">{messageMaker}</div>
        {notificationItem}
      </div>
    </div>
  );
};

export default Notification;
