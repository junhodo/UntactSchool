import React from 'react';
import '../../../css/MenuList.css';
import { OptionIcon, AddGroupIcon, LogoutIcon } from '../../../static/svg/icon';

const data = [
  {
    name: '그룹 생성',
    icon: AddGroupIcon,
    link: '/addgroup'
  },
  {
    name: '내 정보 조회',
    icon: OptionIcon,
    link: '/myinfo'
  },
  {
    name: '로그아웃',
    icon: LogoutIcon,
    link: '/logout'
  }
];

function MenuList() {
  return (
    <div className="menuList">
      {data.map(e => (
        <div className="menuListItem">
          <e.icon />
          <h5>{e.name}</h5>
        </div>
      ))}
    </div>
  );
}

export default MenuList;
