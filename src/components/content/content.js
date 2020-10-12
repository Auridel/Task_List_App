import React from "react";
import {connect} from "react-redux";
import Tasklist from "../tasklist/tasklist";

import "./content.scss"

const Content = ({folders, folId}) => {
    const currentFolder = folders.filter(item => item.id === folId)[0];
    return (

        <section className="content">
            { folders.length ?<>
                {
                    currentFolder ? <>
                            <header className="content__header">
                                <h2 className="header">{currentFolder.title}</h2>
                            </header>
                            <Tasklist folId={currentFolder.id}/>
                        </> :
                        <>
                            {folders.map(item => {
                                return (
                                    <>
                                        <header className="content__header">
                                            <h2 className="header">{item.title}</h2>
                                        </header>
                                        <Tasklist folId={item.id}/>
                                    </>
                                )
                            })}
                        </>
                }</> : <h2 className="empty">Задачи отсутствуют</h2>
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