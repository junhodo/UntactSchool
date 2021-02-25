import React from 'react';
import '../css/PersonInfo.css';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const PersonInfo = () => {
  return (
    <div className="Box">
      <h4>가입자 정보</h4>
      <Toast>
        <ToastHeader icon="">민무길</ToastHeader>
        <ToastBody>가입일자 : 21년 2월 23일</ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="secondary">이지훈</ToastHeader>
        <ToastBody>가입일자 : 21년 2월 22일</ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="success">김정환</ToastHeader>
        <ToastBody>가입일자 : 21년 1월 1일</ToastBody>
      </Toast>{' '}
    </div>
  );
};

export default PersonInfo;
