/** @format */

import {dataProject} from "../../components/offlineData";
import {IProject} from "../../components/interface/IProject";

enum ActionString {
    ADD_PROJECT = "ADD_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT",
}

interface ActionProjectsAdd {
    type: ActionString.ADD_PROJECT;
    payload: IProject;
}

interface ActionProjectsDel {
    type: ActionString.DELETE_PROJECT;
    payload: IProject;
}

type ActionProjects = ActionProjectsAdd | ActionProjectsDel;

const initialState: IProject[] = dataProject;

export const projectsReducer = (
    state = initialState,
    action: ActionProjects
): IProject[] => {
    switch (action.type) {
        case ActionString.ADD_PROJECT:
            return [...state, action.payload];
        case ActionString.DELETE_PROJECT:
            return [
                ...state.filter((project) => project.id !== action.payload.id),
            ];
        default:
            return state;
    }
};

// export const addProject = (project: IProject) => (type: ActionString.ADD_PROJECT, project);
// export const deleteProject = (project: IProject) => (type: ActionString.DELETE_PROJECT, project);
