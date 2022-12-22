/** @format */

import {combineReducers} from "redux";
import {eachTaskReducer} from "./eachTaskReducer";
import {modalViewReducer} from "./modalViewReducer";
import {taskBoardDataReducer} from "./taskBoardDataReducer";
import {projectsReducer} from "./projectsReducer";
import {subTaskViewReducer} from "./subTask/subTaskViewReducer";
import {idForSubTaskReducer} from "./subTask/idForSubTaskReducer";

import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootResucer = combineReducers({
    projects: projectsReducer,
    eachTask: eachTaskReducer,
    modalView: modalViewReducer,
    taskBoardData: taskBoardDataReducer,
    subTaskView: subTaskViewReducer,
    idForSubTask: idForSubTaskReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

export const persistedReducer = persistReducer(persistConfig, rootResucer);

export type RootState = ReturnType<typeof rootResucer>;
// export const store = createStore(rootResucer);
