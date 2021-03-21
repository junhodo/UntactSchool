import React, { useEffect, useState } from 'react';
import TodoItemCard from './TodoItemCard';
import '../../../../css/my/Contents/Content.css';
import { AddIcon } from '../../../../static/svg/icon';

const todos = [
  { todo: '할 일 1', items: [] },
  { todo: '할 일 2', items: ['아이템1', '아이템2', '아이템3'] },
  { todo: '미룬 일 1', items: ['미룬거1', '미룬거2'] }
];

const Todo = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    setTodo(todos);
  }, []);

  return (
    <div className="contentWrapper">
      <div className="contentTitle">
        <h5>TODO 리스트</h5>
        <button type="button" className="addBtn">
          <AddIcon />
        </button>
      </div>
      {todo ? (
        todo.map(e => <TodoItemCard todo={e.todo} items={e.items} />)
      ) : (
        <div>
          <h5>로딩중</h5>
        </div>
      )}
    </div>
  );
};

export default Todo;
