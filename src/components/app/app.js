import React, {useState} from "react";
import Navbar from "../navbar/navbar";
import Content from "../content/content";

import "./app.scss"

const App = () => {
    const [folder, setFolder] = useState(null);

    const selectFolder = (folId) => {
        if(folId) setFolder(folId);
        else setFolder(null);
    };
    return(
        <main className="app">
            <Navbar onFolderChange={selectFolder}/>
            <Content folId={folder}/>
        </main>
    )
};

export default App;