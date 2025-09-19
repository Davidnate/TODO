import React from "react";
import './FormModal.css';

function FormModal() {
    return (
        <form className="FormModal">
            <label>Escribe tu nuevo TODO</label>
            <textarea className="textTodo" placeholder="Añade tu TODO"></textarea>
            <div className="buttonsContainer">
                <button className="buttonCancel" type="button">Cancelar</button>
                <button className="buttonSubmit" type="submit">Añadir</button>
            </div>
        </form>
    )
}

export { FormModal };