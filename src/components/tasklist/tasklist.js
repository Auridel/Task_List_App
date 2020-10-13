import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import AddTask from "../addTask/addTask";

import "./tasklist.scss";

const Tasklist = ({tasks, folId}) => {
    const [openAddForm, setOpenAddForm] = useState(false);
    useEffect(() => {
        setOpenAddForm(false);
    }, [tasks, folId]);
    return (
        <div className="container">
            <ul className="tasks__list">
                {tasks ? tasks.filter(el => el.colId === folId).map(item => {
                    return (<li key={item.id} className="tasks__item">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            href="" className="task__link"
                            alt="task">
                            {item.text}
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

export default connect(mapStateToProps)(Tasklist);