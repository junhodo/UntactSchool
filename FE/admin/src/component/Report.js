import React from 'react';
import '../css/Notification.css';
import { Toast, ToastHeader } from 'reactstrap';

const Report = () => {
  // defendant  classfication  time  reporter
  const dummy = [
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05'
    }
  ];

  const items = dummy.map(item => (
    <Toast>
      <ToastHeader>{item.defendant}</ToastHeader>
      <div className="itemContent">
        <span>{item.classfication}</span>
        <span>{item.time}</span>
      </div>
    </Toast>
  ));
  return (
    <div className="Box">
      <h4>신고 접수</h4>
      <div className="ItemBox">{items}</div>
    </div>
  );
};

export default Report;
