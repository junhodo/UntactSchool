import React, { useState } from 'react';
import { SidebarOpenIcon, SidebarCloseIcon } from '../../../static/svg/icon';

function SidebarIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSidebar = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.getElementsByClassName('main')[0].style.marginRight = '0px';
      document.getElementsByClassName('sidebar')[0].style.width = '0px';
      return;
    }
    document.getElementsByClassName('main')[0].style.marginRight = '200px';
    document.getElementsByClassName('sidebar')[0].style.width = '200px';
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

// import PropTypes from 'prop-types';
// SidebarIcon.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
//     onChangeIsOpen: PropTypes.func.isRequired
//   };
