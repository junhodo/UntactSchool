import React from 'react';
import { Toast, ToastHeader } from 'reactstrap';

const GroupInfo = () => {
  // group  description  people  limit  time
  const dummy = [
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    },
    {
      group: '토익합시다',
      description: '@@토익 900점을 위한방@@',
      people: '12',
      limit: '50',
      time: '2021-02-24 : 21:07'
    }
  ];

  const items = dummy.map(item => (
    <Toast>
      <ToastHeader>{item.group}</ToastHeader>
      <div className="itemContent">
        <span>{item.description}</span>
        <span>
          {item.people}/{item.limit}
        </span>
      </div>
    </Toast>
  ));
  return (
    <div className="Box">
      <h4>그룹정보</h4>
      <div className="ItemBox">{items}</div>
    </div>
  );
};

export default GroupInfo;
