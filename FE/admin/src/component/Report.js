import React from 'react';
import '../css/Report.css';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Report = () => {
  return (
    <div className="Box">
      <h4>미처리 신고내역</h4>
      <Toast>
        <ToastHeader icon="">민무길</ToastHeader>
        <ToastBody>음담패설</ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="secondary">이지훈</ToastHeader>
        <ToastBody>욕설</ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="success">김정환</ToastHeader>
        <ToastBody>도배</ToastBody>
      </Toast>{' '}
    </div>
  );
};

export default Report;
