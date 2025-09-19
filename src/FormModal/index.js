import React from "react";
import './FormModal.css';
import { TodoContext } from "../TodoContext";

function FormModal() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return (
        <form className="FormModal" onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea className="textTodo" placeholder="Añade tu TODO"
                value={newTodoValue}
                onChange={onChange}
                required></textarea>
            <div className="buttonsContainer">
                <button className="buttonCancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="buttonSubmit" type="submit" >Añadir</button>
            </div>
        </form>
    )
}

export { FormModal };