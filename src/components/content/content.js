import React from "react";
import {connect} from "react-redux";
import Tasklist from "../tasklist/tasklist";
import Header from "../header/header";

import "./content.scss"


const Content = ({folders, folId}) => {
    const currentFolder = folders.filter(item => item.id === folId)[0];


    const showCurrent = (current) => {
        return(
            <>
                <Header folder={current}/>
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
                            <Header key={item.id} folder={item}/>
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
                <>{currentFolder ? showCurrent(currentFolder) : showAll(folders)}</>
                    :
                <h2 className="empty">Задачи отсутствуют</h2>
            }
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        folders: state.folders
    }
};


export default connect(mapStateToProps)(Content);