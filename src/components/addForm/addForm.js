import React, {useState, useRef} from "react";
import {connect} from "react-redux";
import classNames from "classnames";

import "./addForm.scss";

const AddForm = ({onFormClose}) => {
    const [selected, setSelected] = useState("grey");
    const inputRef = useRef();
    const colors = ["grey", "green", "blue", "pink", "grass", "purple", "black", "red"];
    const setClass = (item) => {
        return classNames({
            color: true,
            green_pick: item === "green",
            blue_pick: item === "blue",
            grass_pick: item === "grass",
            pink_pick: item === "pink",
            grey_pick: item === "grey",
            purple_pick: item === "purple",
            black_pick: item === "black",
            red_pick: item === "red",
            active_pick: item === selected
        })
    };

    return (
        <div className="add-form">
            <input ref={inputRef} className="add-form__input" type="text"/>
            <ul className="color-picker">
                {colors.map(elem => {
                    return <li
                        onClick={() => setSelected(elem)}
                        key={elem}
                        className="color-picker__item">
                        <button className={setClass(elem)}/>
                    </li>
                })}
            </ul>
            <button className="add-form__btn">Добавить</button>
            <button
                onClick={() => onFormClose()}
                className="add-form__close"/>
        </div>
    )
};

export default AddForm;