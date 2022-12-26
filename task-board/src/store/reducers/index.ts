/** @format */

import {combineReducers} from "redux";
// import {eachTaskReducer} from "./taskBoard/eachTaskReducer";
import {modalViewReducer} from "./modalViewReducer";
import {taskBoardDataReducer} from "./taskBoard/taskBoardDataReducer";
import {projectsReducer} from "./mainReducer/projectsReducer";
import {subTaskViewReducer} from "./subTaskViewReducer";
import {idTaskReducer} from "./idTaskAndSub/idTaskReducer";
import {idSubTaskReducer} from "./idTaskAndSub/idSubTaskReducer";
import {modalViewDelTaskReducer} from "./delTask/modalViewDelTask";
import {idForDelTaskReducer} from "./delTask/idForDelTask";

import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootResucer = combineReducers({
    projects: projectsReducer,
    // eachTask: eachTaskReducer,
    modalView: modalViewReducer,
    taskBoardData: taskBoardDataReducer,
    subTaskView: subTaskViewReducer,
    idTask: idTaskReducer,
    idSubTask: idSubTaskReducer,
    modalViewDelTask: modalViewDelTaskReducer,
    idForDelTask: idForDelTaskReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

export const persistedReducer = persistReducer(persistConfig, rootResucer);

export type RootState = ReturnType<typeof rootResucer>;
// export const store = createStore(rootResucer);
