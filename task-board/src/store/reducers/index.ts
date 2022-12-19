/** @format */

import {combineReducers} from "redux";
import {eachTaskReducer} from "./eachTaskReducer";
import {modalViewReducer} from "./modalViewReducer";
import {projectsReducer} from "./projectsReducer";

export const rootResucer = combineReducers({
    projects: projectsReducer,
    eachTask: eachTaskReducer,
    modalView: modalViewReducer,
});

export type RootState = ReturnType<typeof rootResucer>;
// export const store = createStore(rootResucer);
