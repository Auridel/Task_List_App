import {combineReducers} from "redux";
import folders from "./folders";
import tasks from "./tasks";


export default combineReducers({
    folders: folders,
    tasks: tasks
});