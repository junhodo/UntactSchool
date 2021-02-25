import React from 'react';
import { Toast, ToastHeader } from 'reactstrap';

const PersonInfo = () => {
  // nickname    userid    name    join
  const dummy = [
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    },
    {
      nickname: '길무짱',
      userid: 'alsanrlf',
      name: '민무길',
      join: '2021-02-24'
    }
  ];

  const items = dummy.map(item => (
    <Toast>
      <ToastHeader>{item.nickname}</ToastHeader>
      <div className="itemContent">
        <span>{item.userid}</span>
        <span>{item.name}</span>
        <span>{item.join}</span>
      </div>
    </Toast>
  ));
  return (
    <div className="Box">
      <h4>회원 정보</h4>
      <div className="ItemBox">{items}</div>
    </div>
  );
};

export default PersonInfo;
