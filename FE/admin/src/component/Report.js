import { React, useState } from 'react';
import { Toast, ToastHeader, Form, Input, Button } from 'reactstrap';
import '../css/Report.css';

const Report = () => {
  const [willShow, setWillShow] = useState(0);
  const [excution, setExcution] = useState('선처');
  const [defendantID, setDefendant] = useState(0);
  // defendant  classfication  time  reporter  content  id  excute
  const [dummy, setDummy] = useState([
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      excute: '미처리',
      id: 1
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      excute: '미처리',
      id: 2
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      excute: '미처리',
      id: 3
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      excute: '미처리',
      id: 4
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      excute: '미처리',
      id: 5
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      excute: '미처리',
      id: 6
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      excute: '미처리',
      id: 7
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      excute: '미처리',
      id: 8
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      excute: '미처리',
      id: 9
    },
    {
      defendant: '민무길',
      reporter: '길무짱',
      classfication: '욕설',
      time: '2021-02-24 : 21:05',
      content:
        '아니 재가 어제 저한테 막 욕을 했어요. 아니 무줙권 정지해주세요.',
      excute: '미처리',
      id: 10
    }
  ]);

  const notificationClick = event => {
    event.preventDefault();
    setWillShow(Number(event.currentTarget.id));
    if (Number(event.currentTarget.id) === willShow) {
      setWillShow(0);
    }
  };

  const excuteDeliver = event => {
    setExcution(event.target.value);
    setDefendant(event.target.id);
  };

  const excute = () => {
    setDummy(
      dummy.map(dummys =>
        Number(defendantID) === dummys.id
          ? { ...dummys, excute: excution }
          : dummys
      )
    );
    setWillShow(0);
  };

  const reportList = dummy.map(item => (
    <Toast>
      <ToastHeader onClick={notificationClick} id={item.id}>
        {item.defendant}__{item.excute}
      </ToastHeader>
      <div className="itemContent">
        <span>{item.classfication}</span>
        <span>{item.time}</span>
      </div>
      <div
        className={`notificationContent${
          { willShow }.willShow === Number(item.id)
            ? ''
            : ' notificationContentHidden'
        }
        }`}
      >
        <div>{item.content}</div>
        <Form className="excute">
          <Input type="select" onChange={excuteDeliver} id={item.id}>
            <option value="선처">미처리</option>
            <option value="선처">선처</option>
            <option value="1일 정지">1일 정지</option>
            <option value="3일 정지">3일 정지</option>
            <option value="7일 정지">7일 정지</option>
            <option value="1개월 정지">1개월 정지</option>
            <option value="영구정지">영구정지</option>
          </Input>
          <Button onClick={excute}>집행</Button>
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
