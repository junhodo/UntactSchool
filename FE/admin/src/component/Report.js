import { React, useState } from 'react';
import { Toast, ToastHeader, Form, Input, Button } from 'reactstrap';
import '../css/Report.css';

const Report = () => {
  const [willShow, setWillShow] = useState(0);
  // defendant  classfication  time  reporter  content  id

  const dummy = [
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      id: '1'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      id: '2'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      id: '3'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      id: '4'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      id: '5'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      id: '6'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      id: '7'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      id: '8'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      id: '9'
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      id: '10'
    }
  ];

  const notificationClick = event => {
    event.preventDefault();
    setWillShow(event.currentTarget.id);
    if (event.currentTarget.id === willShow) {
      setWillShow(0);
    }
  };

  const reportList = dummy.map(item => (
    <Toast>
      <ToastHeader>{item.defendant}</ToastHeader>
      <div className="itemContent" onClick={notificationClick} id={item.id}>
        <span>{item.classfication}</span>
        <span>{item.time}</span>
      </div>
      <div
        className={`notificationContent${
          { willShow }.willShow === item.id ? '' : ' notificationContentHidden'
        }
        }`}
      >
        <div>{item.content}</div>
        <Form className="excute">
          <Input type="select">
            <option>선처</option>
            <option>1일 정지</option>
            <option>3일 정지</option>
            <option>7일 정지</option>
            <option>1개월 정지</option>
            <option>영구정지</option>
          </Input>
          <Button>집행</Button>
        </Form>
      </div>
    </Toast>
  ));

  return (
    <div className="Box">
      <h4>신고 접수</h4>
      <div className="ItemBox">{reportList}</div>
    </div>
  );
};

export default Report;
