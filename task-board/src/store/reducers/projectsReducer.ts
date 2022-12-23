/** @format */

import {dataProject} from "../../components/offlineData";
import {IProject} from "../../components/interface/IProject";
import {ITask} from "../../components/interface/ITask";

enum ActionString {
    ADD_PROJECT = "ADD_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT",
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
    ADD_SUB_TASK = "ADD_SUB_TASK",
    DELETE_SUB_TASK = "DELETE_SUB_TASK",
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
    payload: {
        projectId: number;
        task: ITask;
    };
}

interface ActionSubTaskAdd {
    type: ActionString.ADD_SUB_TASK;
    payload: {
        projectId: number;
        task: ITask;
        subTask: ITask;
    };
}

interface ActionSubTaskDelete {
    type: ActionString.DELETE_SUB_TASK;
    payload: {
        projectId: number;
        task: ITask;
        subTask: ITask;
    };
}

type ActionProjects =
    | ActionProjectsAdd
    | ActionProjectsDel
    | ActionTaskAdd
    | ActionTaskDelete
    | ActionSubTaskAdd
    | ActionSubTaskDelete;

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
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.filter(
                                  (task) => task.id !== action.payload.task.id
                              ),
                          };
                }),
            ];
        // return [
        //     ...state.filter(
        //         (project) => project.id !== action.payload.projectId
        //     ),
        //     {
        //         ...state.filter(
        //             (project) => project.id === action.payload.projectId
        //         )[0],
        //         tasks: [
        //             ...state.filter(
        //                 (project) => project.id === action.payload.projectId
        //             )[0].tasks,
        //         ],
        //     },
        // ];

        case ActionString.ADD_SUB_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.task.id
                                      ? task
                                      : {
                                            ...task,
                                            subTasks: [
                                                ...(task.subTasks ?? []),
                                                action.payload.subTask,
                                            ],
                                        };
                              }),
                          };
                }),
            ];
        case ActionString.DELETE_SUB_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.task.id
                                      ? task
                                      : {
                                            ...task,
                                            subTasks: task.subTasks?.filter(
                                                (sub) =>
                                                    sub.id !==
                                                    action.payload.subTask.id
                                            ),
                                        };
                              }),
                          };
                }),
            ];
        default:
            return state;
    }
};

// export const addProject = (project: IProject) => (type: ActionString.ADD_PROJECT, project);
// export const deleteProject = (project: IProject) => (type: ActionString.DELETE_PROJECT, project);
