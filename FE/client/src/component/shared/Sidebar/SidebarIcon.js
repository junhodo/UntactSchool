import React, { useState } from 'react';
import { SidebarOpenIcon, SidebarCloseIcon } from '../../../static/svg/icon';

function SidebarIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSidebar = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.getElementsByClassName('main')[0].style.marginRight = '0px';
      document.getElementsByClassName('sidebar')[0].style.right = '-17%';
      return;
    }
    document.getElementsByClassName('main')[0].style.marginRight = '17%';
    document.getElementsByClassName('sidebar')[0].style.right = '0';
  };

  return (
    <button
      className="sidebarBtn"
      variant="outline-black"
      type="button"
      onClick={onOpenSidebar}
    >
      {isOpen ? <SidebarOpenIcon /> : <SidebarCloseIcon />}
    </button>
  );
}

export default SidebarIcon;
