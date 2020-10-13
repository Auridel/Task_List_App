import React, {useRef} from "react";
import {connect} from "react-redux";
import {v4 as uuid} from "uuid";
import {ADD_TASK} from "../../actions";

import "./addTask.scss";

const AddTask = ({onClose, folId, ADD_TASK}) => {
    const taskInputRef = useRef();
    const addTask = () => {
        if(taskInputRef.current.value){
            ADD_TASK(uuid(), folId, taskInputRef.current.value);
            onClose();
        }
    };

    return(
        <div className="add-task">
            <input
                onKeyPress={(e) => {
                    if(e.key === "Enter"){
                        addTask();
                    }
                }}
                ref={taskInputRef}
                placeholder="Текст задачи"
                className="add-task__input"/>
            <button
                onClick={() => {
                    addTask();
                }}
                className="add-task__btn">Добавить</button>
            <button
                onClick={() => onClose()}
                className="add-task__cancel">Отмена</button>
        </div>
    )
};

const mapDispatchToProps = {
    ADD_TASK
};

export default connect(null, mapDispatchToProps)(AddTask);