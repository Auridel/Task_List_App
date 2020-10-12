import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";

import "./navbar.scss";

const Navbar = ({folders, onFolderChange}) => {
    return(
        <nav className="main_nav">
            <button className="all__tasks">Все задачи</button>
            <ul className="folder__list">
                {folders ? folders.map(item => {
                    return(
                        <li
                            key={item.id}
                            className={classNames({
                                folder__item: true,
                                green: item.color === "green",
                                blue: item.color === "blue",
                                grass: item.color === "grass",
                                pink: item.color === "pink",
                                grey: item.color === "grey"
                            })}
                        ><a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                onFolderChange(item.id)}}
                            className="folder__link"
                            alt={item.title}>{item.title}</a></li>
                    )
                }) : ""}
            </ul>
            <button className="add__folder">Добавить папку</button>
        </nav>
    )
};

const maoStateToProps = (state) => {
    return {
        folders: state.folders
    }
};

export default connect(maoStateToProps)(Navbar);