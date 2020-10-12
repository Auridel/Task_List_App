import React from "react";
import {connect} from "react-redux";

import "./tasklist.scss";

const Tasklist = ({tasks, folId}) => {
    return (
        <div className="container">
            <ul className="tasks__list">
                {tasks ? tasks.filter(el => el.colId === folId).map(item => {
                    return (<li key={item.id} className="tasks__item">{item.text}</li>)
                }) : ""}
            </ul>
            <button className="add__task">Новая задача</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};

export default connect(mapStateToProps)(Tasklist);