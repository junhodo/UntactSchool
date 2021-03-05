import { React, useState } from 'react';
import '../css/Notification.css';
import { Toast, ToastHeader, Form, Input, Button } from 'reactstrap';

const Notification = () => {
  const [willShow, setWillShow] = useState(0);
  const [noteSave, setNoteSave] = useState('');
  const [noteWriteMode, setNoteWriteMode] = useState(false);
  //  title  sender  time  content  id
  const [dummy, setDummy] = useState([
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
  ]);
  const dummyUser = [
    'alsanrlf',
    'gilmujjang',
    'minmugil',
    'alsanrlf1',
    'alsanrlf2',
    'alsanrlf3'
  ];
  const [targetUser, setTargetUser] = useState([]);
  const [target, setTarget] = useState('');
  const [headSave, setHeadSave] = useState('');

  const notificationClick = event => {
    event.preventDefault();
    setWillShow(event.currentTarget.id);
    if (event.currentTarget.id === willShow) {
      setWillShow(0);
    }
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
    console.log(targetUser);
    const newDummy = {
      title: headSave,
      sender: '길무짱',
      content: noteSave,
      id: '100'
    };
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

  const notificationItem = dummy.map(item => (
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

  const targetUserList = targetUser.map(item => (
    <span className="targetUser">{item}</span>
  ));

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
        <div className="targetUserList">{targetUserList}</div>
        <div className="toastMargin">
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
      <h4>알림</h4>
      <div className="ItemBox">
        <div className="buttonBox">
          <button type="button" className="noteMakeBtn" onClick={btnClick}>
            알림작성
          </button>
          {messageMaker}
        </div>
        {notificationItem}
      </div>
    </div>
  );
};

export default Notification;
