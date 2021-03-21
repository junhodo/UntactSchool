import React from 'react';
import PropTypes from 'prop-types';
import '../../../../css/my/Contents/TodoItemCard.css';
import { ExitIcon } from '../../../../static/svg/icon';

const TodoItemCard = ({ todo, items }) => {
  return (
    <div className="todoItemCard">
      <div className="todoItem">
        <h5>{todo}</h5>
        {items.map(e => (
          <li>{e}</li>
        ))}
      </div>
      <ExitIcon />
    </div>
  );
};

TodoItemCard.propTypes = {
  todo: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TodoItemCard;
