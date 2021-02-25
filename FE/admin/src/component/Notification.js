import React from 'react';
import '../css/Notification.css';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Notification = () => {
  return (
    <div className="Box">
      <h4>알림</h4>
      <Toast>
        <ToastHeader icon="">공지사항</ToastHeader>
        <ToastBody>
          This is a toast with a primary icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="secondary">공지사항</ToastHeader>
        <ToastBody>
          This is a toast with a secondary icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="success">공지사항</ToastHeader>
        <ToastBody>
          This is a toast with a success icon — check it out!
        </ToastBody>
      </Toast>
    </div>
  );
};

export default Notification;
