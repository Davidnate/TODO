import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';
import React from 'react';

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  const isOpenModal = () => {
    setOpenModal(!openModal);
  }
  return (
    <button
      className="CreateTodoButton"
      onClick={isOpenModal}
    >+</button>
  );
}

export { CreateTodoButton };
