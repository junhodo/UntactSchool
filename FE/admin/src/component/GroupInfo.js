import React from 'react';
import '../css/GroupInfo.css';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const GroupInfo = () => {
  return (
    <div className="Box">
      <h4>그룹 정보</h4>
      <Toast>
        <ToastHeader icon="">토익방</ToastHeader>
        <ToastBody>
          This is a toast with a primary icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="secondary">정처기방</ToastHeader>
        <ToastBody>
          This is a toast with a secondary icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="success">컴활방</ToastHeader>
        <ToastBody>
          This is a toast with a success icon — check it out!
        </ToastBody>
      </Toast>
    </div>
  );
};

export default GroupInfo;
