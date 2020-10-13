import React, {useState, useEffect, useRef} from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import {RENAME_FOLDER} from "../../actions";
import Tasklist from "../tasklist/tasklist";

import "./content.scss"


const Content = ({folders, folId, RENAME_FOLDER}) => {
    const [editable, setEditable] = useState(false);
    const currentFolder = folders.filter(item => item.id === folId)[0];
    const editRef = useRef();
    const inputRef = useRef();

    useEffect(() =>{
        if(editable) {
            document.addEventListener("click", handleClick);
        }
        return () => {
            document.removeEventListener("click", handleClick);
        }
    });

    const handleClick = (e) => {
        const node = editRef.current;
        if(inputRef.current.value !== inputRef.current.defaultValue) {
            if(inputRef.current.value) RENAME_FOLDER(inputRef.current.value, editable);
        }
        if(!node || !node.contains(e.target)) setEditable(null);
    };
    const setClass = (item, isHeader = false, isEdit = false) => classNames({
        header: isHeader,
        edit__input: isEdit,
        green_text: item.color === "green",
        blue_text: item.color === "blue",
        grass_text: item.color === "grass",
        pink_text: item.color === "pink",
        grey_text: item.color === "grey",
        purple_text: item.color === "purple",
        black_text: item.color === "black",
        red_text: item.color === "red"
    });

    const editName = (elem) => {
        return (
            <header ref={editRef} className="content__header">
                <input
                    onKeyPress={(e) => {
                        if(e.key === "Enter") {
                            if(inputRef.current.value !== "") {
                                RENAME_FOLDER(inputRef.current.value, editable);
                                setEditable(false);
                            }
                        }
                    }}
                    onBlur={() => {
                        if(inputRef.current.value) {
                            RENAME_FOLDER(inputRef.current.value, editable);
                            setEditable(false);
                        }
                    }}
                    ref={inputRef}
                    autoFocus={true}
                    className={setClass(elem, false, true)}
                    type="text"
                    defaultValue={elem.title}/>
                <button
                    onClick={() => {
                        if (inputRef.current.value !== inputRef.current.defaultValue) {
                            if(inputRef.current.value !== "") RENAME_FOLDER(inputRef.current.value, editable);
                        }
                    }}
                    className="edit__button"/>
            </header>
        )
    };
    const showCurrent = (current) => {
        return(
            <>
                    {editable ? editName(current) :
                        <header className="content__header">
                            <h2
                                onClick={() => setEditable(current.id)}
                                className={setClass(current, true)}>{current.title}
                                    <button
                                        className="header__edit">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z" fill="#DFDFDF"/>
                                        </svg>
                                    </button>
                            </h2>
                        </header>
                    }
                <Tasklist folId={current.id}/>
            </>
        )
    };
    const showAll = (elems) => {
        return (
            <>
                {elems.map(item => {
                    return (
                        <div key={item.id}>
                            <header className="content__header">
                                {editable === item.id ? editName(item) :
                                    <h2
                                        onClick={() => setEditable(item.id)}
                                        className={setClass(item, true)}>
                                        {item.title}
                                        <button
                                            className="header__edit">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z"
                                                    fill="#DFDFDF"/>
                                            </svg>
                                        </button>
                                    </h2>
                                }
                            </header>
                            <Tasklist folId={item.id}/>
                        </div>
                    )
                })}
            </>
        )
    };

    return (

        <section className="content">
            { folders.length ?
                <>
                    {currentFolder ? showCurrent(currentFolder) : showAll(folders)}
                </> : <h2 className="empty">Задачи отсутствуют</h2>
            }
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        folders: state.folders
    }
};
const mapDispatchToProps = {
    RENAME_FOLDER
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);