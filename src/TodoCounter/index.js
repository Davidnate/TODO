import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);
  return (
    <div className='HeaderTodo'>
      <h1 className='TitleTodo'>
        TodoMachine
      </h1>
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
    </div>


  );
}

export { TodoCounter };
