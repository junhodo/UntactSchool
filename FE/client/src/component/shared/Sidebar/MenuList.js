import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function MenuList() {
  return (
    <>
      <ListGroup defaultActiveKey="#3">
        <ListGroup.Item action href="#">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#">
          Link 2
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default MenuList;
