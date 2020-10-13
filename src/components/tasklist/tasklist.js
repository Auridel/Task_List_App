import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {DELETE_TASK, COMPLETE_TASK} from "../../actions";
import classNames from "classnames";
import AddTask from "../addTask/addTask";

import "./tasklist.scss";

const Tasklist = ({tasks, folId, DELETE_TASK, COMPLETE_TASK}) => {
    const [openAddForm, setOpenAddForm] = useState(false);
    const setClass = (item) => classNames({
        task__link: true,
        completed: item.done
    });

    useEffect(() => {
        setOpenAddForm(false);
    }, [tasks, folId]);
    return (
        <div className="container">
            <ul className="tasks__list">
                {tasks ? tasks.filter(el => el.folId === folId).map(item => {
                    return (<li key={item.id} className="tasks__item">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                if(e.target.classList.contains("task__link")) COMPLETE_TASK(item.id);
                            }}
                            href="#"
                            className={setClass(item)}
                            alt="check task">
                            {item.text}
                            <button
                                onClick={() => {
                                    DELETE_TASK(item.id)
                                }}
                                className="tasks__del"/>
                        </a>

                    </li>)
                }) : ""}
            </ul>
            {openAddForm ?  <AddTask
                    folId={folId}
                    onClose={() => setOpenAddForm(false)}/> :
                <button
                onClick={() => setOpenAddForm(true)}
                className="add__task">Новая задача</button>}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};
const mapDispatchToProps = {
    DELETE_TASK,
    COMPLETE_TASK
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasklist);