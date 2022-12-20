/** @format */

import {dataProject} from "../../components/offlineData";
import {IProject} from "../../components/interface/IProject";
import {ITask} from "../../components/interface/ITask";

enum ActionString {
    ADD_PROJECT = "ADD_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT",
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
}

interface ActionProjectsAdd {
    type: ActionString.ADD_PROJECT;
    payload: IProject;
}

interface ActionProjectsDel {
    type: ActionString.DELETE_PROJECT;
    payload: IProject;
}

interface ActionTaskAdd {
    type: ActionString.ADD_TASK;
    payload: {
        projectId: number;
        task: ITask;
    };
}

interface ActionTaskDelete {
    type: ActionString.DELETE_TASK;
    payload: ITask;
}

type ActionProjects =
    | ActionProjectsAdd
    | ActionProjectsDel
    | ActionTaskAdd
    | ActionTaskDelete;

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
        case ActionString.ADD_TASK:
            return [
                ...state.filter(
                    (project) => project.id !== action.payload.projectId
                ),
                {
                    ...state.filter(
                        (project) => project.id === action.payload.projectId
                    )[0],
                    tasks: [
                        ...state.filter(
                            (project) => project.id === action.payload.projectId
                        )[0].tasks,
                        action.payload.task,
                    ],
                },
            ];
        case ActionString.DELETE_TASK:
            return state;
        // return [
        //     ...state.filter((project) => project.id !== action.payload.id),
        // ];
        default:
            return state;
    }
};

// export const addProject = (project: IProject) => (type: ActionString.ADD_PROJECT, project);
// export const deleteProject = (project: IProject) => (type: ActionString.DELETE_PROJECT, project);
