import React, {useState, useRef} from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import {ADD_FOLDER} from "../../actions";
import {v4 as uuid} from "uuid";

import "./addForm.scss";

const AddForm = ({onFormClose, ADD_FOLDER}) => {
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
    const addFolder = () => {
        if(inputRef.current.value){
            ADD_FOLDER(inputRef.current.value, selected, uuid());
            onFormClose();
        }
    };

    return (
        <div className="add-form">
            <input
                onKeyPress={(e) => {
                    if(e.key === "Enter"){
                        addFolder();
                    }
                }}
                placeholder="Название папки"
                ref={inputRef}
                className="add-form__input"
                type="text"/>
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
            <button
                onClick={() => {
                    if(inputRef.current.value){
                        addFolder();
                    }
                }}
                className="add-form__btn">Добавить</button>
            <button
                onClick={() => onFormClose()}
                className="add-form__close"/>
        </div>
    )
};

const mapDispatchToProps = {
    ADD_FOLDER
};

export default connect(false, mapDispatchToProps)(AddForm);