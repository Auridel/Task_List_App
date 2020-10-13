import React, {useRef} from "react";
import {connect} from "react-redux";

import "./addTask.scss";

const AddTask = ({onClose, folId}) => {
    const taskInputRef = useRef();

    return(
        <div className="add-task">
            <input
                ref={taskInputRef}
                placeholder="Текст задачи"
                className="add-task__input"/>
            <button className="add-task__btn">Добавить</button>
            <button
                onClick={() => onClose()}
                className="add-task__cancel">Отмена</button>
        </div>
    )
};

export default AddTask;