/** @format */

import {combineReducers} from "redux";
import {projectsReducer} from "./projectsReducer";

export const rootResucer = combineReducers({
    projects: projectsReducer,
});

export type RootState = ReturnType<typeof rootResucer>;
// export const store = createStore(rootResucer);
