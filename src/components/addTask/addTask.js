import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {v4 as uuid} from "uuid";
import {ADD_TASK} from "../../actions";

import "./addTask.scss";

const AddTask = ({onClose, folId}) => {
    const dispatch = useDispatch();
    const taskInputRef = useRef();
    const addTask = () => {
        if(taskInputRef.current.value){
            dispatch(ADD_TASK(uuid(), folId, taskInputRef.current.value));
            onClose();
        }
    };

    return(
        <div className="add-task">
            <input
                autoFocus={true}
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



export default AddTask;